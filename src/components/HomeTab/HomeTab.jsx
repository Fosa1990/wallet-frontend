import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchFinances } from '../../redux/finances/financesOperations';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import CustomPagination from '../CustomPagination';
// import { circleFont, size } from '../../stylesheet/utils/stylesVars';

import Media from 'react-media';
import Balance from '../Balance';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';
import Loader from '../Loader';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import { circleFont, size } from '../../stylesheet/utils/stylesVars';
import { getIsNewTransaction } from '../../redux/globalSelectors';
import { reloadTransactionList } from '../../redux/globalSlice';

export default function HomeTab() {
  const finances = useSelector(getFinancesSelectors.getFinances);
  const totalDocuments = useSelector(getFinancesSelectors.getCountDocuments);
  const [page, setPage] = useSearchParams({ page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isFetching } = useFetchCurrentUserQuery();
  const isNewTransaction = useSelector(getIsNewTransaction);

  useEffect(() => {
    dispatch(fetchFinances(page.get('page')));
    setIsLoading(true);
    dispatch(reloadTransactionList());
  }, [dispatch, page, isNewTransaction]);

  const onPageСhange = pageNumber => {
    setPage({ page: pageNumber });
  };

  return (
    <>
      {isFetching && <Loader />}
      <Div>
        <Media query="(max-width: 767px)" render={() => <Balance />} />
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <HomeTabMobile finances={finances} />
            ) : (
              <HomeTabTabletDesktop finances={finances} />
            )
          }
        </Media>
        {finances.length === 0 && isFetching && <NoInfo>No data</NoInfo>}
        {totalDocuments.totalDocuments > 0 && isLoading && (
          <CustomPagination
            page={Number(page.get('page'))}
            itemsPerPage={totalDocuments.limitDocuments}
            totalResults={totalDocuments.totalDocuments}
            onPageСhange={onPageСhange}
          />
        )}
      </Div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoInfo = styled.div`
  font: ${circleFont};
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;

  ${size.tablet} {
    font-size: 30px;
  }
`;

// &#8372;&nbsp; спецсимвол гривна+пробел

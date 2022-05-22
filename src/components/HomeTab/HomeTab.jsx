import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import CustomPagination from '../CustomPagination';
import Balance from '../Balance';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';
import Loader from '../Loader';
import NoInfo from '../NoInfo';
import { fetchFinances } from '../../redux/finances/financesOperations';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import { getIsNewTransaction } from '../../redux/globalSelectors';
import { reloadTransactionList } from '../../redux/globalSlice';
// import { circleFont, size } from '../../stylesheet/utils/stylesVars';

export default function HomeTab() {
  const dispatch = useDispatch();
  const [page, setPage] = useSearchParams({ page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const finances = useSelector(getFinancesSelectors.getFinances);
  const totalDocuments = useSelector(getFinancesSelectors.getCountDocuments);
  const isNewTransaction = useSelector(getIsNewTransaction);
  const { isFetching, refetch } = useFetchCurrentUserQuery();

  useEffect(() => {
    dispatch(fetchFinances(page.get('page')));
    setIsLoading(true);
    if (isNewTransaction) {
      refetch();
    }
    dispatch(reloadTransactionList());
  }, [dispatch, isNewTransaction, page, refetch]);

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
        {finances.length === 0 && !isFetching && <NoInfo />}
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

// &#8372;&nbsp; спецсимвол гривна+пробел

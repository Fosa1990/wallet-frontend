import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchFinances } from '../../redux/finances/financesOperations';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import CustomPagination from '../CustomPagination';
import Media from 'react-media';
import Balance from '../Balance';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';
import Loader from '../Loader';
import NoInfo from '../NoInfo';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import ModalAddTransactions from '../../components/ModalAddTransactions';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import { selectIsModalAddTransactionOpen } from '../../redux/globalSelectors';

import { circleFont, size } from '../../stylesheet/utils/stylesVars';
import { getIsNewTransaction } from '../../redux/globalSelectors';
import { reloadTransactionList } from '../../redux/globalSlice';

export default function HomeTab() {
  const finances = useSelector(getFinancesSelectors.getFinances);
  const totalDocuments = useSelector(getFinancesSelectors.getCountDocuments);
  const [page, setPage] = useSearchParams({ page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, refetch } = useFetchCurrentUserQuery();
  const isNewTransaction = useSelector(getIsNewTransaction);
  console.log('isFetching', isFetching);

  useEffect(() => {
    dispatch(fetchFinances(page.get('page')));
    setIsLoading(true);
    if (isNewTransaction) {
      refetch();
    }
    dispatch(reloadTransactionList());
  }, [dispatch, page, isNewTransaction]);

  const onPageСhange = pageNumber => {
    setPage({ page: pageNumber });
  };

  const showModalAddTransactions = useSelector(selectIsModalAddTransactionOpen);
  // console.log('isFetching', isFetching);
  return (
    <>
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
        {!isFetching && finances.length === 0 && <NoInfo />}
        {totalDocuments.totalDocuments > 0 && isLoading && (
          <CustomPagination
            page={Number(page.get('page'))}
            itemsPerPage={totalDocuments.limitDocuments}
            totalResults={totalDocuments.totalDocuments}
            onPageСhange={onPageСhange}
          />
        )}
      </Div>
      <ButtonAddTransactions />
      {showModalAddTransactions && <ModalAddTransactions />}
    </>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// &#8372;&nbsp; спецсимвол гривна+пробел

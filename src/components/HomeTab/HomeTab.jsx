import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import { fetchFinances } from '../../redux/finances/financesOperations';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import {
  selectIsModalAddTransactionOpen,
  selectIsModalDeleteOpen,
  getIsNewTransaction,
} from '../../redux/globalSelectors';
import { openModalDelete } from '../../redux/globalSlice';
import { reloadTransactionList } from '../../redux/globalSlice';
import ModalAddTransactions from '../../components/ModalAddTransactions';
import ModalDelete from '../ModalDelete';
import CustomPagination from '../CustomPagination';
import Balance from '../Balance';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';
import NoInfo from '../NoInfo';
import Loader from '../Loader';

export default function HomeTab() {
  const dispatch = useDispatch();
  const [page, setPage] = useSearchParams({ page: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [transId, setTransId] = useState();
  const finances = useSelector(getFinancesSelectors.getFinances);
  const totalDocuments = useSelector(getFinancesSelectors.getCountDocuments);
  const isNewTransaction = useSelector(getIsNewTransaction);
  const { refetch } = useFetchCurrentUserQuery();

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

  const onDelete = id => {
    // setDisable(true);
    setTransId(id);
    dispatch(openModalDelete());
  };

  const showModalDelete = useSelector(selectIsModalDeleteOpen);
  const showModalAddTransactions = useSelector(selectIsModalAddTransactionOpen);
  const loading = useSelector(getFinancesSelectors.getLoading);
  return (
    <>
      <Div>
        <Media query="(max-width: 767px)" render={() => <Balance />} />
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <HomeTabMobile finances={finances} onDelete={onDelete} />
            ) : (
              <HomeTabTabletDesktop finances={finances} onDelete={onDelete} />
            )
          }
        </Media>
        {loading && <Loader />}
        {!loading && finances.length === 0 && <NoInfo />}
        {totalDocuments.totalDocuments > 0 && isLoading && (
          <CustomPagination
            page={Number(page.get('page'))}
            itemsPerPage={totalDocuments.limitDocuments}
            totalResults={totalDocuments.totalDocuments}
            onPageСhange={onPageСhange}
          />
        )}
      </Div>
      {showModalDelete && <ModalDelete id={transId} />}
      {showModalAddTransactions && <ModalAddTransactions />}
    </>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

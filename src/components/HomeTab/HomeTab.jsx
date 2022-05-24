import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Media from 'react-media';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import { fetchFinances } from '../../redux/finances/financesOperations';
import { useFetchCurrentUserQuery } from '../../redux/auth/authReduce';
import {
  selectIsModalAddTransactionOpen,
  selectIsModalDeleteOpen,
  selectIsModalUpdateTransactionOpen,
  getIsNewTransaction,
} from '../../redux/globalSelectors';
import {
  openModalDelete,
  openModalUpdateTransaction,
  reloadTransactionList,
} from '../../redux/globalSlice';
import ModalAddTransactions from '../../components/ModalAddTransactions';
import ModalUpdateTransactions from '../../components/ModalUpdateTransactions';
import ModalDelete from '../ModalDelete';
import CustomPagination from '../CustomPagination';
import Balance from '../Balance';
import HomeTabMobile from './HomeTabMobile';
import HomeTabTabletDesktop from './HomeTabTabletDesktop';
import NoInfo from '../NoInfo';
import Loader from '../Loader';

export default function HomeTab() {
  const dispatch = useDispatch();
  const { refetch } = useFetchCurrentUserQuery();
  const finances = useSelector(getFinancesSelectors.getFinances);
  const totalDocuments = useSelector(getFinancesSelectors.getCountDocuments);
  const isNewTransaction = useSelector(getIsNewTransaction);
  const showModalDelete = useSelector(selectIsModalDeleteOpen);
  const loading = useSelector(getFinancesSelectors.getLoading);
  const showModalAddTransactions = useSelector(selectIsModalAddTransactionOpen);
  const showModalUpdateTransactions = useSelector(
    selectIsModalUpdateTransactionOpen,
  );
  const [page, setPage] = useSearchParams({ page: 1 });
  const [idTransaction, setIdTransaction] = useState();
  const [dataTransaction, setDataTransaction] = useState();

  useEffect(() => {
    dispatch(fetchFinances(page.get('page')));
    if (isNewTransaction) {
      refetch();
    }
    dispatch(reloadTransactionList());
  }, [dispatch, isNewTransaction, page, refetch]);

  const onPageСhange = pageNumber => {
    setPage({ page: pageNumber });
  };

  const onDelete = id => {
    setIdTransaction(id);
    dispatch(openModalDelete());
  };

  const onEdit = (id, data) => {
    setIdTransaction(id);
    setDataTransaction(data);
    dispatch(openModalUpdateTransaction());
  };

  return (
    <>
      <Div>
        <Media query="(max-width: 767px)" render={() => <Balance />} />
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <HomeTabMobile
                finances={finances}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ) : (
              <HomeTabTabletDesktop
                finances={finances}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            )
          }
        </Media>
        {loading && <Loader />}
        {!loading && finances.length === 0 && <NoInfo />}
        {totalDocuments.totalDocuments > 0 && (
          <CustomPagination
            page={Number(page.get('page'))}
            itemsPerPage={totalDocuments.limitDocuments}
            totalResults={totalDocuments.totalDocuments}
            onPageСhange={onPageСhange}
          />
        )}
      </Div>
      {showModalDelete && <ModalDelete id={idTransaction} />}
      {showModalAddTransactions && <ModalAddTransactions />}
      {showModalUpdateTransactions && (
        <ModalUpdateTransactions
          transactionId={idTransaction}
          dataTransaction={dataTransaction}
        />
      )}
    </>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

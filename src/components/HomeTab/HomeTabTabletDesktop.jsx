import Moment from 'react-moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Comment from './Comment';
import ActionButton from '../ActionButton';
import {
  size,
  circleFont,
  accentBgCl,
  accentNegativeCl,
  accentPositiveCl,
  tableShadow,
} from '../../stylesheet/utils/stylesVars';
import del from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';

import getFinancesSelectors from '../../redux/finances/financesSelectors';
import { useSelector } from 'react-redux';
import { selectIsModalDeleteOpen } from '../../redux/globalSelectors';
export default function HomeTabTabletDesktop({ finances, onDelete }) {
  const loading = useSelector(getFinancesSelectors.getLoading);
  const showModalDelete = useSelector(selectIsModalDeleteOpen);
  console.log(showModalDelete);
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Date</Th>
          <Th>Type</Th>
          <Th>Category</Th>
          <Th>Comment</Th>
          <Th>Sum</Th>
          <Th>Balance</Th>
        </tr>
      </Thead>
      <Tbody>
        {finances.length
          ? finances.map(transaction => (
              <Tr key={transaction._id}>
                <Td>
                  {<Moment format="DD.MM.YYYY">{transaction.date}</Moment>}
                </Td>
                {transaction.transactionType === 'income' ? (
                  <Td>+</Td>
                ) : (
                  <Td>-</Td>
                )}
                <Td>{transaction.category}</Td>
                <Td>{<Comment transactionComment={transaction.comment} />}</Td>
                {transaction.transactionType === 'income' ? (
                  <Income>
                    {Intl.NumberFormat('ru-Ru', {
                      minimumFractionDigits: 2,
                    }).format(transaction.sum)}
                  </Income>
                ) : (
                  <Spend>
                    {Intl.NumberFormat('ru-Ru', {
                      minimumFractionDigits: 2,
                    }).format(transaction.sum)}
                  </Spend>
                )}
                <Td>
                  {Intl.NumberFormat('ru-Ru', {
                    minimumFractionDigits: 2,
                  }).format(transaction.balance)}
                </Td>
                <Td>
                  <Wrap>
                    <ActionButton
                      src={del}
                      type="button"
                      disable={showModalDelete || loading}
                      onClick={() => onDelete(transaction._id)}
                    />
                    <ActionButton
                      src={edit}
                      type="button"
                      disable={showModalDelete || loading}
                      onClick={() => {
                        onDelete(transaction._id);
                      }}
                    />
                  </Wrap>
                </Td>
              </Tr>
            ))
          : null}
      </Tbody>
    </Table>
  );
}

HomeTabTabletDesktop.propTypes = {
  finances: PropTypes.array,
};

const Table = styled.table`
  border-collapse: collapse;
  ${size.tablet} {
    width: 704px;
    max-height: 312px;
  }
  ${size.desktop} {
    width: 715px;
    max-height: 312px;
  }
`;

const Thead = styled.thead`
  background-color: ${accentBgCl};
`;

const Tr = styled.tr``;

const Th = styled.th`
  font-family: ${circleFont};
  font-size: 18px;
  font-weight: 700;

  ${size.tablet} {
    padding: 16px 0 15px;
    text-align: center;
    :first-child {
      border-radius: 30px 0 0 30px;
    }
    :last-child {
      border-radius: 0 30px 30px 0;
    }
  }
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  font-family: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  padding: 14px 0;
  max-width: 140px;
  word-wrap: break-word;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px ${tableShadow};

  ${size.tablet} {
    text-align: center;
  }
  /* &.button {
    max-width: 86px;
    display: flex;
    justify-content: space-between;
    border-bottom: none;
    box-shadow: none;
  } */
`;

const Income = styled(Td)`
  color: ${accentPositiveCl};
`;
const Spend = styled(Td)`
  color: ${accentNegativeCl};
`;
const Wrap = styled.div`
  max-width: 86px;
  display: flex;
  justify-content: space-between;
  border-bottom: none;
  box-shadow: none;
`;

import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
import {
  circleFont,
  accentBgCl,
  accentNegativeCl,
  accentPositiveCl,
} from '../../stylesheet/utils/stylesVars';
import Moment from 'react-moment';

export default function HomeTabTabletDesktop({ finances }) {
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
        {finances &&
          finances.map(transaction => (
            <Tr key={transaction._id}>
              <Td>{<Moment format="DD.MM.YYYY">{transaction.date}</Moment>}</Td>
              {transaction.transactionType === 'income' ? (
                <Td>+</Td>
              ) : (
                <Td>-</Td>
              )}
              <Td>{transaction.category}</Td>
              <Td>{transaction.comment}</Td>
              {transaction.transactionType === 'income' ? (
                <Income>{transaction.sum}</Income>
              ) : (
                <Spend>{transaction.sum}</Spend>
              )}
              <Td>{transaction.balance}</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
}

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

const Tr = styled.tr`
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

const Th = styled.th`
  font: ${circleFont};
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
  font: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  padding: 14px 0;
  text-transform: capitalize;
  ${size.tablet} {
    text-align: center;
  }
`;

const Income = styled(Td)`
  color: ${accentPositiveCl};
`;
const Spend = styled(Td)`
  color: ${accentNegativeCl};
`;

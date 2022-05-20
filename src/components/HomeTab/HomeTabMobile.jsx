import styled from 'styled-components';
// import { size } from '../../stylesheet/utils/stylesVars';
import { circleFont, accentBgCl, accentNegativeCl,accentPositiveCl } from '../../stylesheet/utils/stylesVars';
import Moment from 'react-moment';

export default function HomeTabMobile({ finances }) {
  return finances.map(transaction => (
    <MobileTable key={transaction._id}>
      <Tbody>
        <Tr>
          <Th>Date</Th>
          <Td>{<Moment format="DD.MM.YYYY">{transaction.date}</Moment>}</Td>
        </Tr>
        <Tr>
          <Th>Type</Th>
          <Td>{transaction.transactionType}</Td>
        </Tr>
        <Tr>
          <Th>Category</Th>
          <Td>{transaction.category}</Td>
        </Tr>
        <Tr>
          <Th>Comment</Th>
          <Td>{transaction.comment}</Td>
        </Tr>
        <Tr>
          <Th>Sum</Th>
          <Td>{transaction.sum}</Td>
        </Tr>
        <Tr>
          <Th>Balance</Th>
          <Td>{transaction.balance}</Td>
        </Tr>
      </Tbody>
    </MobileTable>
  ));
}
const MobileTable = styled.table`
  background-color: ${accentBgCl};
  border-collapse: collapse;
  border-radius: 10px;
  width: 280px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;





const Tbody = styled.tbody`
  vertical-align: middle;
  width: 100%;
  padding: 0 20px;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5%;
    width: 5px;
    height: 99%;
    background-color: ${accentPositiveCl};
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  }
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dcdcdf;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Th = styled.th`
  font: ${circleFont};
  font-size: 18px;
  font-weight: 700;
`;

const Td = styled.td`
  font: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  padding: 14px 0;
  text-align: right;
`;

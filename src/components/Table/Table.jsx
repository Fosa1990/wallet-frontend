import styled from 'styled-components';
import {
  accentBgCl,
  accentNegativeCl,
  accentPositiveCl,
} from '../../stylesheet/utils/stylesVars';

export default function Table({ transactions, income = 0, expence = 0 }) {
  return (
    <div>
      <TableMain>
        <Thead>
          <tr>
            <th colSpan={2}>Category</th>
            <th>Sum</th>
          </tr>
        </Thead>
        <tbody>
          {transactions.map(({ id, color, category, sum }) => (
            <TableRow key={id}>
              <TableData>
                <ColorBlock style={{ backgroundColor: color }}></ColorBlock>
              </TableData>
              <TableData>{category}</TableData>
              <TableData>{sum}</TableData>
            </TableRow>
          ))}
        </tbody>
        <TableFoot>
          <TableFootRow>
            <td colSpan={2}>Expence:</td>
            <ExpenceValue>{expence}</ExpenceValue>
          </TableFootRow>
          <TableFootRow>
            <td colSpan={2}>Income:</td>
            <IncomeValue>{income}</IncomeValue>
          </TableFootRow>
        </TableFoot>
      </TableMain>
    </div>
  );
}

const TableMain = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Thead = styled.thead`
  height: 58px;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  background-color: ${accentBgCl};

  th:first-child {
    text-align: start;
    padding-left: 20px;
    border-radius: 30px 0 0 30px;
  }
  th:last-child {
    text-align: end;
    padding-right: 20px;
    border-radius: 0 30px 30px 0;
  }
`;
const TableData = styled.td`
  padding: 8px 0;
  font-size: 16px;
  line-height: 1.2;
  :first-child {
    width: 24px;
    padding-left: 20px;
    padding-right: 16px;
  }
  :last-child {
    text-align: end;
    padding-right: 20px;
  }
`;
const TableRow = styled.tr`
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;
const ColorBlock = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 2px;
`;
const TableFoot = styled.tfoot`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
`;
const TableFootRow = styled.tr`
  td {
    padding-top: 14px;
  }
  td:first-child {
    text-align: start;
    padding-left: 20px;
  }
  td:last-child {
    text-align: end;
    padding-right: 20px;
  }
`;
const ExpenceValue = styled.td`
  color: ${accentNegativeCl};
`;
const IncomeValue = styled.td`
  color: ${accentPositiveCl};
`;

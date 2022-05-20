import styled from 'styled-components';
import {
  accentBgCl,
  accentNegativeCl,
  accentPositiveCl,
} from '../../stylesheet/utils/stylesVars';
import { colors } from '../../helpers/constants';
import { size } from '../../stylesheet/utils/stylesVars';

export default function Table({ categories, transactionType }) {
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
          {categories.map(category => (
            <TableRow key={category._id}>
              <TableData>
                {colors.map(
                  color =>
                    color.category === category._id && (
                      <ColorBlock
                        key={color.color}
                        style={{ backgroundColor: color.color }}
                      ></ColorBlock>
                    ),
                )}
              </TableData>
              <TableData>{category._id}</TableData>
              <TableData>{category.totalSum}</TableData>
            </TableRow>
          ))}
        </tbody>
        <TableFoot>
          <TableFootRow>
            <td colSpan={2}>Income:</td>
            <IncomeValue>{transactionType[0]?.totalSum ?? 0}</IncomeValue>
          </TableFootRow>
          <TableFootRow>
            <td colSpan={2}>Expence:</td>
            <ExpenceValue>{transactionType[1]?.totalSum ?? 0}</ExpenceValue>
          </TableFootRow>
        </TableFoot>
      </TableMain>
    </div>
  );
}

const TableMain = styled.table`
  width: 280px;
  border-collapse: collapse;

  margin: 0 auto;

  ${size.tablet} {
    width: 336px;
  }
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
  text-transform: capitalize;
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

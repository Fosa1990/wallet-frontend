import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  accentBgCl,
  accentNegativeCl,
  accentPositiveCl,
} from '../../stylesheet/utils/stylesVars';
import { colors, optionModalTransuction } from '../../utils/constants';
import {
  size,
  tableRowBorderCl,
  tableShadow,
} from '../../stylesheet/utils/stylesVars';
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
          {categories
            .filter(item => item._id !== optionModalTransuction.trTypeAdd)
            .map(category => (
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
                <TableData>
                  {Intl.NumberFormat('ru-Ru', {
                    minimumFractionDigits: 2,
                  }).format(category.totalSum)}
                </TableData>
              </TableRow>
            ))}
        </tbody>
        <TableFoot>
          <TableFootRow>
            <td colSpan={2}>Income:</td>
            <IncomeValue>
              {categories.length > 1
                ? Intl.NumberFormat('ru-Ru', {
                    minimumFractionDigits: 2,
                  }).format(transactionType[0]?.totalSum)
                : '0,00'}
            </IncomeValue>
          </TableFootRow>
          <TableFootRow>
            <td colSpan={2}>Expence:</td>
            <ExpenceValue>
              {categories.length > 0
                ? categories.length === 1
                  ? Intl.NumberFormat('ru-Ru', {
                      minimumFractionDigits: 2,
                    }).format(transactionType[0]?.totalSum)
                  : Intl.NumberFormat('ru-Ru', {
                      minimumFractionDigits: 2,
                    }).format(transactionType[1]?.totalSum)
                : '0,00'}
            </ExpenceValue>
          </TableFootRow>
        </TableFoot>
      </TableMain>
    </div>
  );
}

Table.propTypes = {
  categories: PropTypes.array,
  transactionType: PropTypes.array,
};

const TableMain = styled.table`
  width: 280px;
  border-collapse: collapse;
  margin: 0 auto;
  ${size.tablet} {
    width: 336px;
  }
  ${size.desktop} {
    width: 395px;
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
  margin-bottom: 8px;

  ${size.tablet} {
    margin-bottom: 16px;
  }
  /* ${size.desktop} {
    width: 395px;
  } */
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
  ${size.tablet} {
    padding: 16px 0;
  }
`;
const TableRow = styled.tr`
  border-bottom: 1px solid ${tableRowBorderCl};
  box-shadow: 0px 1px 0px ${tableShadow};
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

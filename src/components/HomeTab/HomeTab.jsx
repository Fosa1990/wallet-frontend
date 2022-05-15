import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
import {
  circleFont,
  accentBgCl,
  bgTabletWalletCl,
} from '../../stylesheet/utils/stylesVars';

// убрать цвет фона

const Table = styled.table`
  background-color: lightgrey;
    border-collapse: collapse;

  ${size.desktop} {
    width: 715px;
    height: 312px;
  }
`;

const Thead = styled.thead`
  background-color: ${accentBgCl};
`;

const Tr = styled.tr`
border-bottom: 1px solid #DCDCDF;
box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);`;


const Th = styled.th`
  font: ${circleFont};
  font-size: 18px;
  font-weight: 700;
  // text-align: center;
  padding: 16px 0 15px;

  :first-child {
    // padding-left: 20px;
    border-radius: 30px 0 0 30px;
  }

  :last-child {
    // padding-right: 20px;
    border-radius: 0 30px 30px 0;
  }

`;

const Tbody = styled.tbody``;

const Td = styled.td`
  font: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  padding: 14px 0;
`;

export default function HomeTab() {
  return (
    <div>
      Component: HomeTab
      <Table>
        <Thead>
          <tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Comment</Th>
            <Th>&#8372;&nbsp;Sum</Th>
            <Th>&#8372;&nbsp;Balance</Th>
          </tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>04.01.19</Td>
            <Td>-</Td>
            <Td>other spend</Td>
            <Td>gift</Td>
            <Td>300</Td>
            <Td>6900</Td>
          </Tr>
          <Tr>
            <Td>05.01.19</Td>
            <Td>+</Td>
            <Td>regular income</Td>
            <Td>january bonus</Td>
            <Td>8000</Td>
            <Td>14900</Td>
          </Tr>
          <Tr>
            <Td>07.01.19</Td>
            <Td>-</Td>
            <Td>car</Td>
            <Td>oil</Td>
            <Td>1000</Td>
            <Td>13900</Td>
          </Tr>{' '}
          <Tr>
            <Td>07.01.19</Td>
            <Td>-</Td>
            <Td>food</Td>
            <Td>vegetables</Td>
            <Td>280</Td>
            <Td>13870</Td>
          </Tr>{' '}
          <Tr>
            <Td>07.01.19</Td>
            <Td>+</Td>
            <Td>unregular income</Td>
            <Td>birthday gift</Td>
            <Td>1000</Td>
            <Td>14870</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}

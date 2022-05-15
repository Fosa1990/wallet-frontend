import styled from 'styled-components';

import { circleFont } from '../../stylesheet/utils/stylesVars';

const Table = styled.table``;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
  font: circleFont;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const Tbody = styled.tbody``;

const Td = styled.td``;

export default function HomeTab() {
  return (
    <div>
      Component: HomeTab
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Comment</Th>
            <Th>Sum</Th>
            <Th>Balance</Th>
          </Tr>
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
        </Tbody>
      </Table>
    </div>
  );
}

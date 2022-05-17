import styled from 'styled-components';
// import { size } from '../../stylesheet/utils/stylesVars';
import { circleFont, accentBgCl } from '../../stylesheet/utils/stylesVars';

const MobileTable = styled.table`
  background-color: ${accentBgCl};
  border-collapse: collapse;
  border-radius: 10px;
  width: 280px;
  height: 282px;
  display: flex;
  justify-content: center;
  border-left: 5px solid blue;
`;

const Tbody = styled.tbody`
  vertical-align: middle;
  width: 100%;
  padding: 0 20px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dcdcdf;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Th = styled.th`
  font: ${circleFont};
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  `;

const Td = styled.td`
  font: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  padding: 14px 0;
  text-align: right;
  //   padding-left: 20px;
`;

export default function HomeTabMobile() {
  return (
    <MobileTable>
      <Tbody>
        <Tr>
          <Th>Date</Th>
          <Td>04.01.19</Td>
        </Tr>
        <Tr>
          <Th>Type</Th>
          <Td>-</Td>
        </Tr>
        <Tr>
          <Th>Category</Th>
          <Td>other spend</Td>
        </Tr>
        <Tr>
          <Th>Comment</Th>
          <Td>gift</Td>
        </Tr>
        <Tr>
          <Th>Sum</Th>
          <Td>300</Td>
        </Tr>
        <Tr>
          <Th>Balance</Th>
          <Td>6900</Td>
        </Tr>
      </Tbody>
    </MobileTable>
  );
}

import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
import {
  iconBgValueCl,
  iconBgCl,
  accentBgCl,
  poppinsFont,
  circleFont,
} from '../../stylesheet/utils/stylesVars';

const Table = styled.table`
  background-color: ${iconBgValueCl};
  border-radius: 30px 30px 30px 30px;
  border-collapse: collapse;
  ${size.mobile} {
    width: 280px;
    height: 174px;
  }
  ${size.tablet} {
    width: 336px;
    height: 182px;
  }
  ${size.desktop} {
    width: 393px;
    height: 347px;
  }
`;

const Thead = styled.thead`
  background-color: ${iconBgCl};

  ${size.mobile} {
    height: 50px;
  }
  ${size.tablet} {
    height: 50px;
  }
  ${size.desktop} {
    height: 60px;
  }
`;

const Tr = styled.tr``;

const Th = styled.th`
  font: ${poppinsFont};
  font-size: 700;
  font-weight: 18px;
  line-height: 26px;
  color: ${accentBgCl};

  :first-child {
    border-radius: 30px 0 0 0;
  }
  :last-child {
    border-radius: 0 30px 0 0;
  }
`;
// почему не работает цвет текста из переменной

const Td = styled.td`
  font: ${circleFont};
  font-size: 400;
  font-weight: 16px;
  line-height: 23px;
  color: white;
  padding: 0 20px;

  :not(:first-child) {
    text-align: center;
  }
`;

export default function Currency() {
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Currency</Th>
            <Th>Buy</Th>
            <Th>Sell</Th>
          </Tr>
        </Thead>
        <tbody>
          <tr>
            <Td>USD</Td>
            <Td>33.50</Td>
            <Td>34.50</Td>
          </tr>
          <tr>
            <Td>EUR</Td>
            <Td>37.50</Td>
            <Td>38.50</Td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

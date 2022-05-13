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
    // height: 174px;
    height: 138px;
  }
  ${size.tablet} {
    width: 336px;
    // height: 182px;
     height: 146px;
  }
  ${size.desktop} {
    width: 393px;
    // height: 347px;
    height: 299px;
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

const Tr = styled.tr`

`;

const Th = styled.th`
  font: ${poppinsFont};
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: ${accentBgCl};

  :first-child {
    border-radius: 30px 0 0 0;
  }
  :last-child {
    border-radius: 0 30px 0 0;
  }
`;

const Tbody = styled.tbody`


${size.desktop} {
    vertical-align: top;
  }
`


const Td = styled.td`
  font: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}

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
        <Tbody>
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
        </Tbody>
      </Table>
      
    </div>
  );
}

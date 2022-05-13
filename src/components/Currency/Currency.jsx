import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';

const Table = styled.table`
${size.mobile} {
    width: 320px;
    }
   ${size.tablet} {
    width: 768px;
     }
  ${size.desktop} {
    width: 1280px;
    }
`

export default function Currency() {
  return (
    <div>
      Component: Currency
      <Table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>33.50</td>
            <td>34.50</td>
          </tr>
          <tr>
            <td>EUR</td>
             <td>37.50</td>
            <td>38.50</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
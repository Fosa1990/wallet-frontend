import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
import {
  circleFont,
  accentBgCl,
  bgTabletWalletCl,
} from '../../stylesheet/utils/stylesVars';

import Media from 'react-media';
import { Fragment } from 'react';

const Table = styled.table`
  background-color: ${bgTabletWalletCl};
  border-collapse: collapse;

  ${size.tablet} {
    width: 704px;
    height: 312px;
  }
  ${size.desktop} {
    width: 715px;
    height: 312px;
  }
`;

const MobileTable = styled.table`
  background-color: ${accentBgCl};
  border-collapse: collapse;
  border-radius: 10px;

  ${size.mobile} {
    width: 280px;
    height: 282px;
    display: flex;
    justify-content: space-between;
    border-left: 5px solid blue;
  }
`;

const Thead = styled.thead`
  background-color: ${accentBgCl};
`;

const Tr = styled.tr`
  ${size.mobile} {
    border-bottom: 1px solid #dcdcdf;
  }
  ${size.tablet} {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

const Th = styled.th`
  font: ${circleFont};
  font-size: 18px;
  font-weight: 700;
  padding: 16px 0 15px;

  ${size.mobile} {
    text-align: left;
    padding-right: 20px;
  }

  ${size.tablet} {
    text-align: center;
    :first-child {
      border-radius: 30px 0 0 30px;
    }

    :last-child {
      border-radius: 0 30px 30px 0;
    }
  }
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  font: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  padding: 14px 0;

  ${size.mobile} {
    text-align: right;
    padding-left: 20px;
  }

  ${size.tablet} {
    text-align: center;
  }
`;

export default function HomeTab() {
  return (
    <Media query="(max-width: 768px)">
      {matches =>
        matches ? (
          <Fragment>
            Component: HomeTab
            <MobileTable>
              <tbody>
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
              </tbody>
            </MobileTable>
          </Fragment>
        ) : (
          <Fragment>
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
                </Tr>
                <Tr>
                  <Td>07.01.19</Td>
                  <Td>-</Td>
                  <Td>food</Td>
                  <Td>vegetables</Td>
                  <Td>280</Td>
                  <Td>13870</Td>
                </Tr>
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
          </Fragment>
        )
      }
    </Media>
  );
}

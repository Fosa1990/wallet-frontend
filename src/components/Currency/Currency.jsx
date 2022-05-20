import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
import {
  iconBgValueCl,
  iconBgCl,
  accentBgCl,
  poppinsFont,
  circleFont,
} from '../../stylesheet/utils/stylesVars';

import wave from '../../images/wave.png';
import Loader from '../Loader';

import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;
axios.defaults.baseURL = baseUrl;

// поправить позицию лоадера

export default function Currency() {
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    getExchangeRates().then(data => {
      return setExchangeRates(data);
    });
  }, []);

  function getExchangeRates() {
    return axios
      .get(baseUrl)
      .then(res => res.data)
      .catch(error => console.log(error.message));
  }
  function getExchangeRates() {
    return fetch(
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    )
      .then(res => res.json())
      .then(res => res)
      .catch(error => console.log(error.message));
  }

  return (
    <Wrapper>
      {!exchangeRates && <Loader />}
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
            <Td>
              {exchangeRates &&
                exchangeRates[0].ccy + `/` + exchangeRates[0].base_ccy}
            </Td>
            <Td>{exchangeRates && Number(exchangeRates[0].buy).toFixed(2)}</Td>
            <Td>{exchangeRates && Number(exchangeRates[0].sale).toFixed(2)}</Td>
          </tr>
          <tr>
            <Td>
              {exchangeRates &&
                exchangeRates[1].ccy + `/` + exchangeRates[1].base_ccy}
            </Td>
            <Td>{exchangeRates && Number(exchangeRates[1].buy).toFixed(2)}</Td>
            <Td>{exchangeRates && Number(exchangeRates[1].sale).toFixed(2)}</Td>
          </tr>
          <tr>
            <Td>
              {exchangeRates &&
                exchangeRates[2].ccy + `/` + exchangeRates[2].base_ccy}
            </Td>
            <Td>{exchangeRates && Math.round(Number(exchangeRates[2].buy))}</Td>
            <Td>
              {exchangeRates && Math.round(Number(exchangeRates[2].sale))}
            </Td>
          </tr>
          <tr>
            <td colSpan="3">
              <Wave alt="wave" src={wave} />
            </td>
          </tr>
        </Tbody>
      </Table>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  ${size.tablet} {
    margin-top: 32px;
  }
`;

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
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: ${accentBgCl};

  :first-child {
    border-radius: 30px 0 0 0;
    text-align: left;
    padding-left: 20px;
  }
  :last-child {
    border-radius: 0 30px 0 0;
  }
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  font: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: white;
  padding-left: 20px;
  padding-right: 20px;

  :not(:first-child) {
    text-align: center;
  }

  ${size.desktop} {
    padding-top: 20px;
    padding-bottom: 4px;
  }
`;

const Wave = styled.img`
  ${size.mobile} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 280px;
    height: 93px;
  }
  ${size.tablet} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 336px;
    height: 119px;
  }
  ${size.desktop} {
    position: static;
    width: 393px;
    height: 134px;
  }
`;

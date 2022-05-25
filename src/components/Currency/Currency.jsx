import { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Loader from '../Loader';
import { useLocaleStorage } from '../../hooks/useLocaleStorage';
import { getCurrencyRates } from '../../services/currencyService';
import { roundToTwoAfterZero } from '../../utils/roundToTwoAfterZero';
import { TIME_MS, NAMES } from '../../utils/constants';

import {
  iconBgValueCl,
  iconBgCl,
  accentBgCl,
  poppinsFont,
  circleFont,
  size,
} from '../../styles/stylesVars';
import wave from '../../assets/images/wave.png';

export default function Currency() {
  const [exchangeRates, setExchangeRates] = useState([]);
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    getRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRates = async () => {
    try {
      const data = await getCurrencyRates();
      await setExchangeRates(data);
      await setCurrentDate(moment().format('MMM Do YY'));
    } catch (error) {
      const currencyFromLocalStorage = JSON.parse(
        localStorage.getItem(NAMES.CURRENCY),
      );
      if (
        !currencyFromLocalStorage ||
        currentDate !== currencyFromLocalStorage.date
      ) {
        return setTimeout(getRates, TIME_MS.HOUR);
      }
      setExchangeRates(currencyFromLocalStorage.data);
    }
  };

  useLocaleStorage(NAMES.CURRENCY, {
    rates: exchangeRates,
    date: currentDate,
  });

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
        <tbody>
          {exchangeRates
            ?.filter(item => item.ccy !== 'RUR')
            .map(
              item =>
                item && (
                  <Tr key={item.ccy}>
                    <Td>
                      {item.ccy}/{item.base_ccy}
                    </Td>
                    {item.ccy !== 'BTC' ? (
                      <Td>{roundToTwoAfterZero(item.buy)}</Td>
                    ) : (
                      <Td>{Number(item.buy).toFixed(0)}</Td>
                    )}
                    {item.ccy !== 'BTC' ? (
                      <Td>{roundToTwoAfterZero(item.sale)}</Td>
                    ) : (
                      <Td>{Number(item.sale).toFixed(0)}</Td>
                    )}
                  </Tr>
                ),
            )}
          <tr>
            <Space colSpan="3"></Space>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
}

const Space = styled.td`
  ${size.desktop} {
    height: 134px;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
`;
const Wrapper = styled.div`
  ${size.tablet} {
    padding-top: 32px;
  }
`;
const Table = styled.table`
  background-color: ${iconBgValueCl};
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  border-radius: 30px 30px 30px 30px;
  border-collapse: collapse;
  ${size.mobile} {
    background-image: url(${wave});
    width: 280px;
  }
  ${size.tablet} {
    width: 336px;
  }
  ${size.desktop} {
    background-image: none;
    width: 393px;
    text-align: center;
  }
`;
const Thead = styled.thead`
  background-color: ${iconBgCl};
  ${size.mobile} {
    height: 50px;
  }
  ${size.desktop} {
    height: 60px;
  }
`;
const Tr = styled.tr`
  vertical-align: middle;
  ${size.mobile} {
    height: 50px;
  }
`;
const Th = styled.th`
  font-family: ${poppinsFont};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${accentBgCl};
  :first-child {
    border-radius: 30px 0 0 0;
    text-align: left;
    padding-left: 20px;
  }
  :last-child {
    border-radius: 0 30px 0 0;
  }
  ${size.desktop} {
    :first-child {
      text-align: center;
      padding-left: 0;
    }
  }
`;
const Td = styled.td`
  font-family: ${circleFont};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
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
  ${size.tablet} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

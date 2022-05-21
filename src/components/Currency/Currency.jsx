import { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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

import { useLocaleStorage } from '../../hooks/useLocaleStorage';
import { TIME_MS, NAMES } from '../../helpers/constants';
import { roundToTwoAfterZero } from '../../helpers/roundToTwoAfterZero';
import { getCurrencyRates } from '../../services/currencyService';

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
        <Tbody>
                  {item.ccy !== 'BTC' ? (
                    <Td>{roundToTwoAfterZero(item.sale)}</Td>
          {exchangeRates
            ?.filter(item => item.ccy !== 'RUR')
            .map(
              item =>
                item && (
                  <tr key={item.ccy}>
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
                  </tr>
                ),
            )}
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
  ${size.desktop} {
    margin-top: 32px;
  }
`;

const Table = styled.table`
  background-color: ${iconBgValueCl};
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
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
    background-position: center;
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

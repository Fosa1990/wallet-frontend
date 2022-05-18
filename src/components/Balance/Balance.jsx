import styled from 'styled-components';
import React, { /* useState,*/ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBalance } from '../../redux/finances/financesOperations';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import { size } from '../../stylesheet/utils/stylesVars';
import {
  poppinsFont,
  circleFont,
  accentBgCl,
  balanceCl,
  accentTextCl
} from '../../stylesheet/utils/stylesVars';

export default function Balance() {
  const balance = useSelector(getFinancesSelectors.getBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);



  return (
    <BalanceWrapper>
      Your balance
      <BalanceSum>
        <span>&#8372;&nbsp;</span>
        {balance}
      </BalanceSum>
    </BalanceWrapper>
  );

  
}  const BalanceWrapper = styled.div`
    background-color: ${accentBgCl};
    border-radius: 30px;
    font-family: ${circleFont};
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: ${balanceCl};
    padding: 8px 40px 11px;

    ${size.tablet} {
      width: 395;
    }
    ${size.desktop} {
      width: 336px;
    }
    ${size.mobile} {
      width: 280px;
      padding-left: 32px;
    }
  `;

  const BalanceSum = styled.div`
    font-family: ${poppinsFont};
    font-weight: 900;
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: ${accentTextCl};
  `;

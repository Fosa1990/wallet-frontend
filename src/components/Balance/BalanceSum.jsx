import styled from 'styled-components';
import React, { /* useState,*/ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBalance } from '../../redux/finances/financesOperations';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import {
  poppinsFont,
  accentTextCl,
} from '../../stylesheet/utils/stylesVars';

export default function BalanceSum() {
  const balance = useSelector(getFinancesSelectors.getBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <Sum>
      <span>&#8372;&nbsp;</span>
      {balance ? balance : 0.00}    
    </Sum>
  );
}

const Sum = styled.div`
  font-family: ${poppinsFont};
  font-weight: 900;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: ${accentTextCl};
`;

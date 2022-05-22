import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchBalance } from '../../redux/finances/financesOperations';
import authSelectors from '../../redux/auth/authSelectors';
import { poppinsFont, accentTextCl } from '../../stylesheet/utils/stylesVars';

export default function BalanceSum() {
  const balance = useSelector(authSelectors.getBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <Sum>
      <span>&#8372;&nbsp;</span>
      {balance
        ? Intl.NumberFormat('ru-Ru', {
            minimumFractionDigits: 2,
          }).format(balance)
        : 0.0}
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

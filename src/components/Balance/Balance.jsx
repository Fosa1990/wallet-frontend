import styled from 'styled-components';
import BalanceSum from './BalanceSum';
import {
  size,
  circleFont,
  accentBgCl,
  balanceCl,
} from '../../styles/stylesVars';

export default function Balance() {
  return (
    <BalanceWrapper>
      Your balance
      <BalanceSum />
    </BalanceWrapper>
  );
}

const BalanceWrapper = styled.div`
  background-color: ${accentBgCl};
  border-radius: 30px;
  font-family: ${circleFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${balanceCl};
  width: 280px;
  padding-left: 32px;
  margin-bottom: 32px;
  ${size.tablet} {
    width: 336px;
    padding: 8px 40px 11px;
    margin-bottom: 0px;
  }
  ${size.desktop} {
    width: 395px;
  }
`;

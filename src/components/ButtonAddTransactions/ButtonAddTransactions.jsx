import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openModalAddTransaction } from '../../redux/globalSlice';
import {
  accentPositiveCl,
  size,
  accentBtnShadowPositiveCl,
  accentBtnShadowLightCl,
} from '../../styles/stylesVars';
import sprite from '../../assets/images/svg/sprite.svg';

export default function ButtonAddTransactions() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(openModalAddTransaction())}>
      <svg width={20} height={20}>
        <use href={`${sprite}#icon-add`} />
      </svg>
    </Button>
  );
}

const Button = styled.button`
  position: sticky;
  float: right;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: none;
  background: ${accentPositiveCl};
  box-shadow: 0px 6px 15px ${accentBtnShadowPositiveCl};
  &:hover,
  &:focus {
    box-shadow: inset 0px 0px 45px ${accentBtnShadowLightCl};
    cursor: pointer;
  }
  ${size.tablet} {
    bottom: 40px;
  }
`;

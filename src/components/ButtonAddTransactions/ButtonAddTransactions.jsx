import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openModalAddTransaction } from '../../redux/globalSlice';
import { accentPositiveCl, size } from '../../stylesheet/utils/stylesVars';
import sprite from '../../images/svg/sprite.svg';

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
  position: fixed;
  width: 44px;
  height: 44px;
  right: 20px;
  bottom: 20px;
  border-radius: 22px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  background: ${accentPositiveCl};

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: inset 0px 0px 45px rgba(255, 255, 255, 0.7);
  }

  ${size.tablet} {
    right: 40px;
    bottom: 40px;
  }
`;

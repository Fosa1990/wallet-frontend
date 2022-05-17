import {
  accentPositiveCl,
  size,
  accentNegativeCl,
} from '../../stylesheet/utils/stylesVars';
import styled from 'styled-components';
import sprite from '../../images/svg/sprite.svg';

export default function ButtonAddTransactions() {
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
      background: ${accentNegativeCl};
    }

    ${size.tablet} {
      right: 40px;
      bottom: 40px;
    }
  `;

  return (
    <Button>
      <svg width={20} height={20}>
        <use href={`${sprite}#icon-add`} />
      </svg>
    </Button>
  );
}

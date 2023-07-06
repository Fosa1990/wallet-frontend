import styled from 'styled-components';
import PropTypes from 'prop-types';
import { optionModalTransaction } from '../../../utils/constants';
import {
  accentPositiveCl,
  accentBgCl,
  accentNegativeCl,
  accentDisableCl,
  accentBtnShadowPositiveCl,
  accentBtnShadowNegativeCl,
} from '../../../styles/stylesVars';
import sprite from '../../../assets/images/svg/sprite.svg';

export default function ToggleSwitch({ checked, handleChange }) {
  return (
    <ToggleSwitchWraper>
      <Span color={!checked ? accentDisableCl : accentPositiveCl}>
        {optionModalTransaction.add}
      </Span>
      <input
        checked={checked}
        type="checkbox"
        onChange={handleChange}
        className="visually-hidden"
      />
      <Switch>
        <Svg checked={checked}>
          {checked && <use href={`${sprite}#icon-add`} />}
          {!checked && <use href={`${sprite}#icon-remove`} />}
        </Svg>
      </Switch>
      <Span color={checked ? accentDisableCl : accentNegativeCl}>
        {optionModalTransaction.spend}
      </Span>
    </ToggleSwitchWraper>
  );
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const ToggleSwitchWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.color};
`;
const Switch = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  padding: 4px;
  background: ${accentBgCl};
  border-radius: 30px;
  border: 1px solid ${accentDisableCl};
  cursor: pointer;
`;

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: -4px;
  width: 20px;
  height: 20px;
  padding: 12px;
  border-radius: 44px;
  box-sizing: content-box;
  transition: 300ms transform;
  transform: ${p =>
    p.checked ? ' translate(0, -50%)' : 'translate(100%, -50%)'};
  background-color: ${p => (p.checked ? accentPositiveCl : accentNegativeCl)};
  box-shadow: ${p =>
    p.checked
      ? `0px 6px 15px ${accentBtnShadowPositiveCl}`
      : `0px 6px 15px ${accentBtnShadowNegativeCl}`};
`;

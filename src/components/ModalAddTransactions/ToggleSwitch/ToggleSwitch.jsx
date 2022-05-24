import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { optionModalTransuction } from '../../../utils/constants';
import {
  accentPositiveCl,
  accentBgCl,
  accentNegativeCl,
  accentDisableCl,
} from '../../../styles/stylesVars';
import sprite from '../../../assets/images/svg/sprite.svg';

export default function ToggleSwitch({ check }) {
  const [checked, setChecked] = useState(false);

  const handleChange = ({ target: { checked } }) => {
    setChecked(checked);
    check(checked);
  };

  return (
    <ToggleSwitchWraper>
      <Span color={!checked ? accentDisableCl : accentPositiveCl}>
        {optionModalTransuction.add}
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
        {optionModalTransuction.spend}
      </Span>
    </ToggleSwitchWraper>
  );
}
ToggleSwitch.propTypes = {
  check: PropTypes.func.isRequired,
};

const ToggleSwitchWraper = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.color};
`;
const Switch = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  background: ${accentBgCl};
  border-radius: 30px;
  border: 1px solid ${accentDisableCl};
  padding: 4px;
  cursor: pointer;
`;
const Svg = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 12px;
  border-radius: 44px;
  left: -4px;
  top: 50%;
  box-sizing: content-box;
  transition: 300ms transform;
  transform: ${p =>
    p.checked ? ' translate(0, -50%)' : 'translate(100%, -50%)'};
  background-color: ${p => (p.checked ? accentPositiveCl : accentNegativeCl)};
  box-shadow: ${p =>
    p.checked
      ? '0px 6px 15px rgba(36, 204, 167, 0.5)'
      : '0px 6px 15px rgba(255, 101, 150, 0.5)'};
`;

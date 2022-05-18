import {
  accentNegativeCl,
  accentDisableCl,
  accentTextCl,
  accentBgCl,
} from '../../../stylesheet/utils/stylesVars';
import styled from 'styled-components';
import sprite from '../../../images/svg/sprite.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SelectCustom({ options, select }) {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Choose categories');
  const [selected, setSelecte] = useState(false);

  const handleChange = e => {
    setSelectedOption(e);
    if (!selected) {
      setSelecte(true);
    }
    select(e);
  };

  return (
    <Div>
      <PlaceholderWraper>
        <H2 select={selected}>{selectedOption}</H2>
        <button
          type="button"
          onClick={() => setSelectOpen(prevCheck => !prevCheck)}
        >
          <svg>
            <use href={`${sprite}#icon-select-modal`} />
          </svg>
        </button>
      </PlaceholderWraper>
      {selectOpen && (
        <Ul onClick={e => handleChange(e.target.textContent)}>
          {options.map(({ value, label }) => (
            <Li key={value}>{value}</Li>
          ))}
        </Ul>
      )}
    </Div>
  );
}

SelectCustom.propTypes = {
  options: PropTypes.array,
  select: PropTypes.func.isRequired,
};

const PlaceholderWraper = styled.div`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;

  button {
    border: none;
    background: none;

    svg {
      position: relative;
      right: 0;
      width: 18px;
      height: 9px;
    }
  }
`;

const Div = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px 0 20px;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: ${p => (p.select ? accentTextCl : accentDisableCl)};
`;

const Ul = styled.ul`
  margin-top: 4px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  border-radius: 20px;
`;

const Li = styled.li`
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${accentNegativeCl};
    background: ${accentBgCl};
    &:last-child {
      border-radius: 0 0 20px 20px;
    }
    &:first-child {
      border-radius: 20px 20px 0 0;
    }
  }
`;

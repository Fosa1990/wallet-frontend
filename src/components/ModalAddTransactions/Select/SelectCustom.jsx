import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  statisticColors,
  optionModalTransuction,
} from '../../../utils/constants';
import {
  accentBtnShadowLightCl,
  accentPositiveCl,
  accentNegativeCl,
  accentDisableCl,
  accentTextCl,
  accentBgCl,
  circleFont,
  selectShadowCl,
} from '../../../styles/stylesVars';
import sprite from '../../../assets/images/svg/sprite.svg';

export default function SelectCustom({ select }) {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Choose categories');
  const [selected, setSelecte] = useState(false);

  const array = statisticColors.filter(
    e => optionModalTransuction.trTypeAdd !== e['category'],
  );

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
          {array.map(({ category }) => (
            <Li key={category}>
              {category.split('')[0].toUpperCase() + category.slice(1)}
            </Li>
          ))}
        </Ul>
      )}
    </Div>
  );
}

SelectCustom.propTypes = {
  select: PropTypes.func.isRequired,
};

const PlaceholderWraper = styled.div`
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${circleFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
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
  position: absolute;
  z-index: 1000;
  left: 0;
  width: 100%;
  height: 352px;
  margin-top: 4px;
  background: ${accentBtnShadowLightCl};
  box-shadow: 0px 6px 15px ${selectShadowCl};
  backdrop-filter: blur(50px);
  border-radius: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.3em;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(${accentPositiveCl}, ${accentDisableCl});
    border-radius: 10px;
  }
`;
const Li = styled.li`
  height: 44px;
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    color: ${accentNegativeCl};
    background: ${accentBgCl};
    cursor: pointer;
    &:last-child {
      border-radius: 0 0 20px 20px;
    }
    &:first-child {
      border-radius: 20px 20px 0 0;
    }
  }
`;

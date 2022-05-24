import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { months } from '../../utils/constants';
import { size } from '../../styles/stylesVars';

export default function Select({ year, month, onYear, onMonth }) {
  const currentDate = new Date();
  let years = [];
  for (let year = 2020; year <= currentDate.getFullYear(); year += 1) {
    years.push(year);
  }
  const optionsMonths = months.map((text, index) => {
    return (
      <option key={index} value={index + 1}>
        {text}
      </option>
    );
  });
  const optionsYears = years.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
    <SelectWrap>
      <SelectField value={month} onChange={onMonth}>
        {optionsMonths}
      </SelectField>
      <SelectField value={year} onChange={onYear}>
        {optionsYears}
      </SelectField>
    </SelectWrap>
  );
}

Select.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  onYear: PropTypes.func.isRequired,
  onMonth: PropTypes.func.isRequired,
};

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  ${size.mobile} {
    height: 120px;
    margin-bottom: 20px;
  }
  ${size.tablet} {
    flex-direction: row;
  }
`;
const SelectField = styled.select`
  width: 280px;
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  padding: 13px 20px;
  margin-bottom: 20px;
  ${size.tablet} {
    width: 160px;
    margin-bottom: 0px;
  }
  ${size.desktop} {
    width: 182px;
    margin-bottom: 0px;
  }
`;

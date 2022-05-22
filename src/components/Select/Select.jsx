import React from 'react';
import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';
import { months } from '../../utils/constants';

export default function Select({ year, month, onYear, onMonth }) {
  let years = [];
  let yearForSelect = null;
  for (let i = 2020; i <= 2025; i++) {
    yearForSelect = i;
    years.push(yearForSelect);
  }

  const optionsMonths = months.map((text, index) => {
    return <option key={index}>{text}</option>;
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

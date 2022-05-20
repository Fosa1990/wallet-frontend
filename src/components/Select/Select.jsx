import React from 'react';
import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';

export default function Select({ year, month, onYear, onMonth }) {
  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
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

  ${size.tablet} {
    width: 160px;
  }
  ${size.desktop} {
    width: 182px;
  }
`;

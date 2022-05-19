import React, { useState } from 'react';
import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';

export default function Select() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let years = [];
  let yearForSelect = null;
  for (let i = 2010; i <= 2022; i++) {
    yearForSelect = i;
    years.push(yearForSelect);
  }

  const optionsMonths = months.map((text, index) => {
    return <option key={index}>{text}</option>;
  });
  const optionsYears = years.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  const onYearSelect = e => setYear(e.target.value);
  const onMonthSelect = e => setMonth(e.target.value);

  return (
    <>
      <SelectWrap>
        <SelectField value={month} onChange={onMonthSelect}>
          {optionsMonths}
        </SelectField>
        <SelectField value={year} onChange={onYearSelect}>
          {optionsYears}
        </SelectField>
      </SelectWrap>
    </>
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

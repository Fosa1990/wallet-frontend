import React, { useState } from 'react';
import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';

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
    'Oktober',
    'November',
    'December',
  ];
  const years = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2222',
  ];

  const optionsMonths = months.map((text, index) => {
    return <option key={index}>{text}</option>;
  });
  const optionsYears = years.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
    <>
      <SelectWrap>
        <SelectField value={month} onChange={e => setMonth(e.target.value)}>
          {optionsMonths}
        </SelectField>
        <SelectField value={year} onChange={e => setYear(e.target.value)}>
          {optionsYears}
        </SelectField>
      </SelectWrap>
    </>
  );
}

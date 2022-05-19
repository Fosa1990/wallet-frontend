import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Table from '../Table';
import Chart from '../Chart';
import Select from '../Select';
import styled from 'styled-components';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import { getCategories } from '../../redux/categories/categoriesOperations';

// баланс в диаграмму подставить когда будет готов компонент баланс
export default function DiagramTab() {
  const categories = useSelector(categoriesSelectors.getCategories);
  // const month = useSelector(categoriesSelectors.getMonth);
  // const year = useSelector(categoriesSelectors.getYear);
  // console.log('__month redux', month);
  // console.log('__year redux', year);

  console.log('__categories DiagramTab', categories);
  const dispatch = useDispatch();

  // 3 передать объект с месяцем и годом
  const [searchParams, setSearchParams] = useSearchParams({});
  console.log(searchParams.get('year'));
  console.log(searchParams.get('month'));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onDateSelect = e => {
    setSearchParams({ year: e.target.value });
    setSearchParams({ month: e.target.value });
  };
  // const onYearSelect = e => {
  //   setSearchParams({ year: e.target.value });
  // };
  // const onMonthSelect = e => {
  //   setSearchParams({ month: e.target.value });
  // };

  return (
    <>
      <ChartWrapper>
        <Balance>&#8372;&nbsp; {categories.length > 0 ? 'balance' : 0}</Balance>
        <Chart categories={categories} />
      </ChartWrapper>
      <Select onMonthSelect={onDateSelect} onYearSelect={onDateSelect} />
      <Table categories={categories} />
    </>
  );
}

const ChartWrapper = styled.div`
  position: relative;
`;
const Balance = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
`;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Table from '../Table';
import Chart from '../Chart';
import Select from '../Select';
import styled from 'styled-components';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import { getCategories } from '../../redux/categories/categoriesOperations';

export default function DiagramTab() {
  const [searchParams, setSearchParams] = useSearchParams({
    year: '2020',
    month: '01',
  });

  const categories = useSelector(categoriesSelectors.getCategories);
  const dispatch = useDispatch();
  // const month = useSelector(categoriesSelectors.getMonth);
  // const year = useSelector(categoriesSelectors.getYear);
  // console.log('__categories DiagramTab', categories[0].category);

  useEffect(() => {
    dispatch(
      getCategories({
        year: searchParams.get('year'),
        month: searchParams.get('month'),
      }),
    );
  }, [dispatch, searchParams]);

  const onYear = e => {
    setSearchParams({
      ...{
        year: searchParams.get('year'),
        month: searchParams.get('month'),
      },
      year: e.target.value,
    });
  };

  const onMonth = e => {
    setSearchParams({
      ...{
        year: searchParams.get('year'),
        month: searchParams.get('month'),
      },
      month: e.target.value,
    });
  };

  let transactionType = [];

  if (categories[0]?.transactionType.length) {
    transactionType = [...categories[0].transactionType].sort((a, b) =>
      a._id.localeCompare(b._id),
    );
  }

  return (
    <>
      <ChartWrapper>
        <Balance>
          &#8372;&nbsp; {categories[0]?.category?.length > 0 ? 'balance' : 0}
        </Balance>
        <Chart categories={categories[0]?.category ?? []} />
      </ChartWrapper>
      <Select
        year={searchParams.get('year')}
        month={searchParams.get('month')}
        onYear={onYear}
        onMonth={onMonth}
      />
      <Table
        categories={categories[0]?.category ?? []}
        transactionType={transactionType}
      />
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

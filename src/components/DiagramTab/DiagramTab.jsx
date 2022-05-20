import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Table from '../Table';
import Chart from '../Chart';
import Select from '../Select';
import BalanceSum from '../Balance/BalanceSum';
import styled from 'styled-components';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import { getCategories } from '../../redux/categories/categoriesOperations';
import { size } from '../../stylesheet/utils/stylesVars';

export default function DiagramTab() {
  const [searchParams, setSearchParams] = useSearchParams({
    year: '2022',
    month: '05',
  });

  const categories = useSelector(categoriesSelectors.getCategories);
  const dispatch = useDispatch();

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
      <DiagramTabWrapper>
        <div>
          <DiagramTabHeader>Statistics</DiagramTabHeader>
          <ChartWrapper>
            <Balance>
              {categories[0]?.category?.length > 0 && <BalanceSum />}
            </Balance>
            <Chart categories={categories[0]?.category ?? []} />
          </ChartWrapper>
        </div>
        <div>
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
        </div>
      </DiagramTabWrapper>
    </>
  );
}

const DiagramTabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${size.tablet} {
    flex-direction: row;
  }
`;
const DiagramTabHeader = styled.h2`
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;

  margin-bottom: 8px;
`;
const ChartWrapper = styled.div`
  position: relative;

  margin-bottom: 32px;
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

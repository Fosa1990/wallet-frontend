import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import getFinancesSelectors from '../../redux/finances/financesSelectors';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import { getCategories } from '../../redux/categories/categoriesOperations';
import Table from '../Table';
import Chart from '../Chart';
import Select from '../Select';
import BalanceSum from '../Balance/BalanceSum';
import { NAMES } from '../../utils/constants';
import { size } from '../../styles/stylesVars';
import nodata from '../../assets/images/nodata.jpg';

export default function DiagramTab() {
  const currentDate = new Date();
  const [searchParams, setSearchParams] = useSearchParams({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
  });

  const categories = useSelector(categoriesSelectors.getCategories);
  const loading = useSelector(getFinancesSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCategories({
        year: searchParams.get(NAMES.YEAR),
        month: searchParams.get(NAMES.MONTH),
      }),
    );
  }, [dispatch, searchParams]);

  const onYear = e => {
    setSearchParams({
      ...{
        year: searchParams.get(NAMES.YEAR),
        month: searchParams.get(NAMES.MONTH),
      },
      year: e.target.value,
    });
  };

  const onMonth = e => {
    setSearchParams({
      ...{
        year: searchParams.get(NAMES.YEAR),
        month: searchParams.get(NAMES.MONTH),
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
    <DiagramTabWrapper>
      <div>
        <DiagramTabHeader>Statistics</DiagramTabHeader>
        <ChartWrapper>
          {!loading && categories[0]?.category.length === 0 ? (
            <NoDataImg src={nodata} />
          ) : (
            <>
              <Balance>
                {categories[0]?.category?.length > 0 && <BalanceSum />}
              </Balance>
              <Chart categories={categories[0]?.category ?? []} />
            </>
          )}
        </ChartWrapper>
      </div>
      <div>
        <Select
          year={searchParams.get(NAMES.YEAR)}
          month={searchParams.get(NAMES.MONTH)}
          onYear={onYear}
          onMonth={onMonth}
        />
        <Table
          categories={categories[0]?.category ?? []}
          transactionType={transactionType}
        />
      </div>
    </DiagramTabWrapper>
  );
}

const DiagramTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 48px;
  ${size.tablet} {
    flex-direction: row;
    padding-bottom: 24px;
  }
  ${size.desktop} {
    padding-bottom: 44px;
  }
`;
const DiagramTabHeader = styled.h2`
  margin-bottom: 8px;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
`;
const ChartWrapper = styled.div`
  position: relative;
  width: 280px;
  margin-bottom: 32px;
  ${size.tablet} {
    margin-right: 32px;
    width: 336px;
    height: 336px;
  }
  ${size.desktop} {
    width: 288px;
    height: 288px;
  }
`;
const Balance = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  transform: translate(-50%, -50%);
`;
const NoDataImg = styled.img`
  width: 100%;
  max-width: 270px;
`;

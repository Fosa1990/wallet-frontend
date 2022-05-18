import Table from '../Table';
import Chart from '../Chart';
import Select from '../Select';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch /*, useSelector, useStore */ } from 'react-redux';
import { getCategories } from '../../redux/categories/categoriesOperations';
import transactions from '../Table/transactions.json';

// баланс в диаграмму подставить когда будет готов компонент баланс
export default function DiagramTab() {
  const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log('searchParams', searchParams);
  // Данные для рендера диаграмы из json
  const categories = transactions.map(transaction => transaction.category);
  const colors = transactions.map(transaction => transaction.color);
  const sums = transactions.map(transaction => transaction.sum);

  useEffect(() => {
    dispatch(getCategories);
  }, [dispatch]);

  return (
    <>
      <ChartWrapper>
        <Balance>
          &#8372;&nbsp; {transactions.length > 0 ? 'balance' : 0}
        </Balance>
        <Chart categories={categories} colors={colors} sums={sums} />
      </ChartWrapper>
      <Select />
      <Table transactions={transactions} />
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

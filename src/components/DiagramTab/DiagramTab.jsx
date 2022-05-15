import Table from '../Table';
import Chart from '../Chart';
import Select from '../Select';
import styled from 'styled-components';
import transactions from '../Table/transactions.json';

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
// баланс в диаграмму подставить когда будет готов компонент баланс
export default function DiagramTab() {
  const categories = transactions.map(transaction => transaction.category);
  const colors = transactions.map(transaction => transaction.color);
  const sums = transactions.map(transaction => transaction.sum);
  return (
    <>
      <ChartWrapper>
        <Balance>
          &#8372;&nbsp; {transactions.length > 0 ? 'balance' : 0}{' '}
        </Balance>
        <Chart categories={categories} colors={colors} sums={sums} />
      </ChartWrapper>
      <Select />
      <Table transactions={transactions} />
    </>
  );
}

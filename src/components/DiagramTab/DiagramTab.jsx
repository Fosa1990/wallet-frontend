import Table from '../Table';
import Chart from '../Chart';
import Select from '../Select';
import transactions from '../Table/transactions.json'


export default function DiagramTab() {
  const categories = transactions.map(transaction => transaction.category)
const colors = transactions.map(transaction => transaction.color);
const sums = transactions.map(transaction=>transaction.sum)
  return (
    <>
      <Chart categories={categories} colors={colors} sums={sums} />
      <Select/>
      <Table transactions={transactions} />
    </>
  )
}
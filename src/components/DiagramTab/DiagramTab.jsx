import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import transactions from '../Table/transactions.json'


export default function DiagramTab() {
  const categories = transactions.map(transaction => transaction.category)
const colors = transactions.map(transaction => transaction.color);
const sums = transactions.map(transaction=>transaction.sum)
  return (
    <>
      <Chart categories={categories} colors={colors} sums={ sums}/>
      <Table transactions={transactions} />
    </>
  )
}
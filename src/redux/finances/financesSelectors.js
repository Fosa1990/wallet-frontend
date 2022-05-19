const getFinances = state => state.finances.finances.transactions;
const getCountDocuments = state => state.finances.finances.countDocuments;
const getBalance = state => state.finances.balance;

const getFinancesSelectors = {
  getFinances,
  getCountDocuments,
  getBalance,
};
export default getFinancesSelectors;

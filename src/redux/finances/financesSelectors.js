const getFinances = state => state.finances.finances.transactions;
const getBalance = state => state.finances.balance;

const getFinancesSelectors = { getFinances, getBalance };
export default getFinancesSelectors;

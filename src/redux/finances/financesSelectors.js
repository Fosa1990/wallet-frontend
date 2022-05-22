const getFinances = state => state.finances.finances.transactions;
const getCountDocuments = state => state.finances.finances.countDocuments;
const getBalance = state => state.finances.balance;
const getLoading = state => state.finances.loading;

const financesSelectors = {
  getFinances,
  getCountDocuments,
  getBalance,
  getLoading,
};
export default financesSelectors;

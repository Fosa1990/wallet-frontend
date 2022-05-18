import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchFinances, fetchBalance } from './financesOperations';

const initialState = {
  transactions: {
    data: [],
    loading: false,
    error: null,
    balance: null,
  },
};

const finances = createReducer([], {
  [fetchFinances.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(initialState.transactions.loading, {
  [fetchFinances.pending]: () => true,
  [fetchFinances.fulfilled]: () => false,
  [fetchFinances.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchFinances.rejected]: (_, { payload }) => payload,
  [fetchFinances.pending]: () => null,
});

const balance = createReducer(initialState.transactions.balance, {
  [fetchBalance.fulfilled]: (_, { payload }) => payload,
});

export default combineReducers({
  finances,
  loading,
  error,
  balance,
});

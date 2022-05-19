import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchFinances, fetchBalance } from './financesOperations';

const initialState = {
  data: {
    transactions: [],
    countDocuments: {},
  },
  loading: false,
  error: null,
  balance: null,
};

const finances = createReducer(initialState.data, {
  [fetchFinances.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer(initialState.loading, {
  [fetchFinances.pending]: () => true,
  [fetchFinances.fulfilled]: () => false,
  [fetchFinances.rejected]: () => false,
});

const balance = createReducer(initialState.balance, {
  [fetchBalance.fulfilled]: (_, { payload }) => payload,
});

const error = createReducer(initialState.error, {
  [fetchFinances.rejected]: (_, { payload }) => payload,
  [fetchFinances.pending]: () => null,
  [fetchBalance.rejected]: (_, { payload }) => payload,
  [fetchBalance.pending]: () => null,
});

export default combineReducers({
  finances,
  loading,
  balance,
  error,
});

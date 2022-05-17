import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchFinances } from './financesOperations';

const finances = createReducer([], {
  [fetchFinances.fulfilled]: (_, { payload }) => payload,
});

const loading = createReducer('notLoading', {
  [fetchFinances.pending]: () => 'loadingContacts',
  [fetchFinances.fulfilled]: () => 'notLoading',
  [fetchFinances.rejected]: () => 'notLoading',
});

const error = createReducer(null, {
  [fetchFinances.rejected]: (_, { payload }) => payload,
  [fetchFinances.pending]: () => null,
});

export default combineReducers({
  finances,
  loading,
  error,
});

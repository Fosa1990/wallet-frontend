import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getCategories } from './categoriesOperations';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesDataReducer = createReducer(initialState.data, {
  [getCategories.fulfilled]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(initialState.loading, {
  [getCategories.pending]: () => true,
  [getCategories.fulfilled]: () => false,
  [getCategories.rejected]: () => false,
});

const errorReducer = createReducer(initialState.error, {
  [getCategories.rejected]: (_, { payload }) => payload,
  [getCategories.pending]: () => null,
});

export default combineReducers({
  data: categoriesDataReducer,
  loading: loadingReducer,
  error: errorReducer,
});

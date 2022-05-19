import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getCategories } from './categoriesOperations';
import { getMonth, getYear } from './categoriesActions';

const initialState = {
  categories: {
    data: [],
    loading: false,
    error: null,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
};

const categoriesDataReducer = createReducer(initialState.categories.data, {
  [getCategories.fulfilled]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(initialState.categories.loading, {
  [getCategories.pending]: () => true,
  [getCategories.fulfilled]: () => false,
  [getCategories.rejected]: () => false,
});

const errorReducer = createReducer(initialState.categories.error, {
  [getCategories.rejected]: (_, { payload }) => payload,
  [getCategories.pending]: () => null,
});

const monthReducer = createReducer(initialState.categories.month, {
  [getMonth.fulfilled]: (_, { payload }) => payload,
});

const yearReducer = createReducer(initialState.categories.year, {
  [getYear.fulfilled]: (_, { payload }) => payload,
});

export default combineReducers({
  data: categoriesDataReducer,
  loading: loadingReducer,
  error: errorReducer,
  month: monthReducer,
  year: yearReducer,
});

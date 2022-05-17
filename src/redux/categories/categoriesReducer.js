import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getCategories } from './categoriesOperations';
// import { getCategories } from './categoriesActions';

const initialState = {
  categories: {
    data: [],
    loading: false,
    error: null,
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

export default combineReducers({
  data: categoriesDataReducer,
  loading: loadingReducer,
  error: errorReducer,
});

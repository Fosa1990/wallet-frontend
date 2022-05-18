import { getCategories } from './categoriesOperations';

import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { data: [], isLoading: false, error: null },
  reducers: {
    [getCategories.fulfilled]: (_, { payload }) => {
      console.log('payload in Slice', payload);
      return payload;
    },
    [getCategories.pending]: state => ({
      ...state,
      isLoading: true,
    }),
    [getCategories.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export default categoriesSlice.reducer;

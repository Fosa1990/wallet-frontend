import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://amazing-wallet.herokuapp.com/api/categories?year=${year}&month=${month}`,
      );
      return response.data.payload.categories;
    } catch (error) {
      console.log('__getCategories error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

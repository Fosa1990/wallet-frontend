import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../helpers/constants';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL.BACK}/api/categories?year=${year}&month=${month}`,
      );
      return response.data.payload.categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

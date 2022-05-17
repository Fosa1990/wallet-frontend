import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://amazing-wallet.herokuapp.com';

axios.defaults.baseURL = BASE_URL;

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await axios.get('/api/categories?year=2022&month=05');
      console.log('__getCategories categories', categories);

      return categories.data;
    } catch (error) {
      console.log('__getCategories error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

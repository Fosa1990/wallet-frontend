import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const { getState } = useStore();
// const { auth } = getState();
// const token = auth.token;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const BASE_URL = 'https://amazing-wallet.herokuapp.com';
axios.default.baseURL = BASE_URL;

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      console.log('BEFORe CONST');

      const response = await axios.get('/api/categories?year=2022&month=05');
      console.log('__getCategories categories', response);

      return response.data;
    } catch (error) {
      console.log('__getCategories error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

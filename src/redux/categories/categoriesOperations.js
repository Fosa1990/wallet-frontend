import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL = 'https://amazing-wallet.herokuapp.com';
// axios.baseURL = BASE_URL;

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://amazing-wallet.herokuapp.com/api/categories?year=${year}&month=${month}`,
      );
      // console.log(
      //   '__getCategories categories',
      //   response.data.payload.categories[0].category,
      // );
      // console.log(
      //   '---getCategories---',
      //   response.data.payload.categories,
      // );
      return response.data.payload.categories;
    } catch (error) {
      console.log('__getCategories error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

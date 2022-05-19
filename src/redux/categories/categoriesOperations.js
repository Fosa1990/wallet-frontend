import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL = 'https://amazing-wallet.herokuapp.com';
// axios.baseURL = BASE_URL;

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  // замість черточки передавати обїект с роком і місяцем
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://amazing-wallet.herokuapp.com/api/categories?year=2022&month=04',
      );
      // console.log(
      //   '__getCategories categories',
      //   response.data.payload.categories[0].category,
      // );
      return response.data.payload.categories[0].category;
    } catch (error) {
      console.log('__getCategories error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

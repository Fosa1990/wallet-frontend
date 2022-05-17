import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://amazing-wallet.herokuapp.com';

export const fetchFinances = createAsyncThunk(
  'finances/getFinances',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/transactions');
      console.log('response', response);
      console.log('response.data', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

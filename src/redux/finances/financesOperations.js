import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://amazing-wallet.herokuapp.com';

export const fetchFinances = createAsyncThunk(
  'finances/getFinances',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://amazing-wallet.herokuapp.com/api/transactions',
      );
      console.log('response', response);
      console.log(
        'response.data.payload/transactions',
        console.log('last'),
        response.data.payload.transactions,
      );
      return response.data.payload;
    } catch (error) {
      console.log('error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchBalance = createAsyncThunk(
  'finances/getBalance',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://amazing-wallet.herokuapp.com/api/transactions',
      );
      return response.data.payload.transactions[
        response.data.payload.transactions.length - 1
      ].balance;
    } catch (error) {
      console.log('error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

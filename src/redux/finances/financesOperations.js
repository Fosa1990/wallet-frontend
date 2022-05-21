import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../helpers/constants';

export const fetchFinances = createAsyncThunk(
  'finances/getFinances',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        // `${BASE_URL.SERVER}/api/transactions?page=${page}&limit=4`,
        `${BASE_URL.BACK}/api/transactions?page=${page}&limit=4`,
      );
      // console.log(
      //   'response.data.payload.transactions',
      //   response.data.payload.transactions,
      // );
      // const sortedTransactions = response.data.payload.transactions.sort(
      //   function (a, b) {
      //     if (a.date > b.date) {
      //       return -1;
      //     } else {
      //       return 1;
      //     }
      //   },
      // );
      // console.log('sortedTransactions', sortedTransactions);
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
      const response = await axios.get(`${BASE_URL.SERVER}/api/transactions`);
      return response.data.payload.transactions[
        response.data.payload.transactions.length - 1
      ]?.balance;
    } catch (error) {
      console.log('error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

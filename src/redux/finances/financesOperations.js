import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, ROUTES } from '../../utils/constants';

const { API, TRANSACTIONS } = ROUTES;

export const fetchFinances = createAsyncThunk(
  'finances/getFinances',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL.SERVER}/${API}/${TRANSACTIONS}?page=${page}`,
      );

      return response.data.payload;
    } catch (error) {
      console.log('error.message', error.message);
      return rejectWithValue(error.message);
    }
  },
);

// export const fetchBalance = createAsyncThunk(
//   'finances/getBalance',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL.SERVER}/${API}/${TRANSACTIONS}`,
//       );
//       return response.data.payload.transactions[
//         response.data.payload.transactions.length - 1
//       ]?.balance;
//     } catch (error) {
//       console.log('error.message', error.message);
//       return rejectWithValue(error.message);
//     }
//   },
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
      return rejectWithValue(error.message);
    }
  },
);

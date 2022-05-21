import axios from 'axios';
import { BASE_URL } from '../helpers/constants';

export const getCurrencyRates = async () => {
  const data = await axios
    // .get(`${BASE_URL.SERVER}/api/currency/`)
    .get(`${BASE_URL.BACK}/api/currency/`)
    .then(res => res.data.payload.data)
    .catch(err => err.data.payload.message);
  return data;
};

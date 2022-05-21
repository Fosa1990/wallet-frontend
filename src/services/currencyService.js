import axios from 'axios';
import { SERVER_BASE_URL } from '../helpers/constants';

export const getCurrencyRates = async () => {
  const data = await axios
    .get(`${SERVER_BASE_URL}/currency/`)
    .then(res => res.data.payload.data)
    .catch(err => err.data.payload.message);
  return data;
};

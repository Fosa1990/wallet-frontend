import axios from 'axios';
import { BASE_URL, ROUTES } from '../utils/constants';
const { API, CURRENCY } = ROUTES;

export const getCurrencyRates = async () => {
  const data = await axios
    .get(`${BASE_URL.SERVER}/${API}/${CURRENCY}/`)
    .then(res => res.data.payload.data)
    .catch(err => err.data.payload.message);
  return data;
};

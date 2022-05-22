import axios from 'axios';
import { tokenService } from './tokenService';
import { ROUTES } from '../utils/constants';

//універсальна функція для запиту, теоретично може бути одна на проект якщо постаратись, використовується у парі з rtcQuery
export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: `${baseUrl}${url}`, method, data });
      setToken(url, result.data.token);
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
// функція добавляє токен до запитів якщо він є
function setToken(url, token) {
  if (url === `/${ROUTES.USERS}/${ROUTES.LOGIN}`) tokenService.set(token);
  if (url === `/${ROUTES.USERS}/${ROUTES.LOGOUT}`) tokenService.unset();
}

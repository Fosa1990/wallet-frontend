import axios from 'axios';

//універсальна функція для запроса, теоретично може буди одна на проект якщо постаратись, використовується у парі з rtcQuery 
export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      setToken(url, result.data.token);
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
// функція добавляє токен до запроса якщо він є 
function setToken(url, token) {
  if (url === '/users/login' || url === '/users/signup') {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  if (url === '/users/logout') {
    axios.defaults.headers.common.Authorization = '';
  }
}

const BASE_URL = {
  FRONT: 'http://localhost:3000',
  BACK: 'http://localhost:8081',
  SERVER: 'https://amazing-wallet.herokuapp.com',
};

const ROUTES = {
  API: 'api',
  AUTH: 'auth',
  USERS: 'users',
  HOME: 'home',
  LOGIN: '/',
  LOGOUT: 'logout',
  REGISTRATION: 'registration',
  VERIFY: 'verify',
  DASHBOARD: 'dashboard',
  CURRENCY: 'currency',
  DIAGRAM: 'diagram',
  NOT_FOUND: 'not-found',
  SERVER_ERROR: 'server-error',
  GOOGLE_AUTH: 'google',
};

const colors = [
  { category: 'basic spend', color: '#FED057' },
  { category: 'products', color: '#FFD8D0' },
  { category: 'car', color: '#FD9498' },
  { category: 'household products', color: '#C5BAFF' },
  { category: 'self care', color: '#6E78E8' },
  { category: 'child care', color: '#4A56E2' },
  { category: 'education', color: '#81E1FF' },
  { category: 'leisure', color: '#24CCA7' },
  { category: 'other spend', color: '#00AD84' },
  { category: 'income', color: '#3B74B4' },
];

const optionModalTransuction = {
  add: 'Income',
  spend: 'Basic spend',
  defaultSpend: 'other spend',
  trTypeAdd: 'income',
  trTypeRemove: 'spend',
};

const TIME_MS = {
  HOUR: 3600000,
};

const NAMES = {
  CURRENCY: 'currency',
  RATES: 'rates',
};

export { BASE_URL, ROUTES, colors, optionModalTransuction, TIME_MS, NAMES };

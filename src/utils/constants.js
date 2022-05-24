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
  DASHBOARD: 'statistics',
  CURRENCY: 'currency',
  CURRENT: 'current',
  DIAGRAM: 'diagram',
  NOT_FOUND: 'not-found',
  SERVER_ERROR: 'server-error',
  GOOGLE_AUTH: 'google',
  TRANSACTIONS: 'transactions',
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  SIGNOUT: 'signout',
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
  add: 'income',
  spend: 'spend',
  trTypeAdd: 'income',
  trTypeRemove: 'spend',
};

const TIME_MS = {
  HOUR: 3600000,
};

const NAMES = {
  CURRENCY: 'currency',
  RATES: 'rates',
  YEAR: 'year',
  MONTH: 'month',
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export {
  BASE_URL,
  ROUTES,
  colors,
  optionModalTransuction,
  TIME_MS,
  NAMES,
  months,
};

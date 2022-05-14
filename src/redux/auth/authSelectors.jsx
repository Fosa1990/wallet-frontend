const getName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getToken = state => state.token;

const authSelectors = {
  getName,
  getIsLoggedIn,
  getToken,
};

export default authSelectors;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getIsFetchingCurrent,
};

export default authSelectors;

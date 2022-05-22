const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsInBase = state => state.auth.isInBase;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getBalance = state => state.auth.user.balance;
const getAvatarURL = state => state.auth.user.avatarURL;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getIsInBase,
  getUserName,
  getToken,
  getAvatarURL,
  getIsFetchingCurrent,
  getBalance,
};

export default authSelectors;

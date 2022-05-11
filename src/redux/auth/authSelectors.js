export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getFetching = state => state.auth.isFetchingCurrentUser;

const authSelectors = { getIsLoggedIn, getUserName, getToken, getFetching };

export default authSelectors;
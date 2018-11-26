export const getAccount = state => state.account;

export const isLoggedIn = state => state.account.UserName != null;

export const getUserName = state => state.account.UserName;

export const getErrors = state => state.errors;

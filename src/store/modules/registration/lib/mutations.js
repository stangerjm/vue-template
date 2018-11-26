export const loginUser = (state, account) => {
  state.account = account;
};

export const logErrors = (state, errors) => {
  state.errors = errors;
};

export const clearErrors = (state) => {
  state.errors = [];
};

export const addError = (state, error) => {
  state.errors.push(error);
};

export const clearUser = (state) => {
  state.account = {};
};

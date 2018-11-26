// import accountService from '../../../services/accountService';
import { until, getErrorsFromResponse } from '../../../utilities';

export const register = async (context, registerModel) => {
  // READ ME!
  // The below line should be used to call a service and the lines defining the "err" and "response"
  // variables should be removed
  // const [response, err] = await until(accountService.register(registerModel));

  // READ ME!
  // These next two lines defining the "err" and "response" variables should be removed and
  // replaced by a call to a service as shown in the comment above
  const err = null;
  const response = {
    data: {
      ...registerModel,
    },
  };

  if (err != null) {
    const errors = getErrorsFromResponse(err);
    context.commit('logErrors', errors);
    return null;
  }

  const account = response.data;
  context.commit('loginUser', account);
  context.commit('clearErrors');
  return account;
};

export const login = (context, loginModel) => {
  context.commit('loginUser', loginModel);
};

export const signOut = (context) => {
  context.commit('clearUser');
};

export const clearErrors = (context) => {
  context.commit('clearErrors');
};

export const addError = (context, { errorMessage, fieldName }) => {
  const error = {
    fieldName,
    message: errorMessage,
  };
  context.commit('addError', error);
};

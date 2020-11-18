import * as auth from '../../clients/http/authentication';

// Actions ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Type
export const AUTHENTICATE_PENDING = 'AUTHENTICATE_PENDING';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR';
export const CHECK_AUTHENTICATION = 'CHECK_AUTHENTICATION';
export const LOGOUT = 'LOGOUT';

// Creators
export const authenticating = () => ({
  type: AUTHENTICATE_PENDING
});
export const authenticateSuccess = (user) => ({
  type: AUTHENTICATE_SUCCESS,
  payload: user
});
export const authenticateError = (error) => ({
  type: AUTHENTICATE_ERROR,
  payload: error
});
export const clearAuthentication = () => ({
  type: LOGOUT
});

// Thunks :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const login = (username, password) => async (dispatch) => {
  dispatch(authenticating());

  try {
    const user = await auth.logIn({username, password});
    dispatch(authenticateSuccess(user));
  } catch (error) {
    dispatch(authenticateError(error));
  }
};

export const logout = () => async (dispatch) => {
  auth.logOut();
  dispatch(clearAuthentication());
};

export const checkAuthentication = () => dispatch => {
  dispatch({ type: CHECK_AUTHENTICATION });

  if (auth.isLoggedIn()) {
    const user = auth.getLoggedUser();
    dispatch(authenticateSuccess(user))
  }
};

// Fetching constants
export const LOADING_STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

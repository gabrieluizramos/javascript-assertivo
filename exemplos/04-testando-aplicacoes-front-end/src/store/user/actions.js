import { logIn } from '../../clients/http';
import { clearData, hasData, getData } from '../../clients/storage';

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
    const user = await logIn({username, password});
    dispatch(authenticateSuccess(user));
  } catch (error) {
    dispatch(authenticateError(error));
  }
};

export const logout = () => async (dispatch) => {
  clearData();
  dispatch(clearAuthentication());
};

export const checkAuthentication = () => dispatch => {
  dispatch({ type: CHECK_AUTHENTICATION });

  if (hasData()) {
    const user = getData();
    dispatch(authenticateSuccess(user))
  }
};

// Fetching constants
export const LOADING_STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

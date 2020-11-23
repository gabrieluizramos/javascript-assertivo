import { AUTHENTICATE_PENDING, AUTHENTICATE_SUCCESS, LOGOUT, LOADING_STATUS } from './actions';

// State ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const INITIAL_STATE = {
  status: null,
  authenticated: false,
  admin: false,
  info: {}
};

// Reducer ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case AUTHENTICATE_PENDING:
      return {
        ...state,
        status: LOADING_STATUS.LOADING
      }

    case AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        status: LOADING_STATUS.LOADED,
        authenticated: true,
        admin: payload.role === 'ADMIN',
        info: payload,
      }
    }

    case LOGOUT: {
      return {
        ...state,
        authenticated: false,
        admin: null,
        info: {}
      }
    }

    default:
      return state;
  }
}

export default reducer;

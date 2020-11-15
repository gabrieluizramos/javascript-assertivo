import {
  LOAD_PROFILES_PENDING,
  LOAD_PROFILES_ERROR,
  LOAD_PROFILES_SUCCESS,
  DELETE_PROFILE_PENDING,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  LOADING_STATUS
} from './actions';


// State ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const INITIAL_STATE = {
  status: null,
  profiles: []
};

// Reducer ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case LOAD_PROFILES_PENDING:
      return {
        ...state,
        status: LOADING_STATUS.LOADING
      }

    case LOAD_PROFILES_SUCCESS: {
      return {
        ...state,
        status: LOADING_STATUS.LOADED,
        profiles: payload
      }
    }


    case DELETE_PROFILE_PENDING: {
      return {
        ...state,
        status: LOADING_STATUS.LOADING,
      }
    }

    case DELETE_PROFILE_SUCCESS: {
      return {
        ...state,
        status: LOADING_STATUS.LOADED,
        profiles: state.profiles.filter(user => user.uid != payload)
      }
    }

    default:
      return state;
  }
}

export default reducer;

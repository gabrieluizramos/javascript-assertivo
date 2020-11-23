import {
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  LOAD_PROFILES_ERROR,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,
  CREATE_USER_PROFILE_SUCCESS,
  CREATE_USER_PROFILE_ERROR
} from '../profiles/actions';
import {
  AUTHENTICATE_ERROR
} from '../user/actions';

import {
  CLEAR_NOTIFICATION,
  NOTIFICATION_TYPES,
  MESSAGES
} from './actions';

export const INITIAL_STATE = {
  active: false,
  type: '',
  message: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const [prefix] = type.split('_');
  const defaultMessage = MESSAGES[prefix] ? MESSAGES[prefix].ERROR : MESSAGES.DEFAULT.ERROR;

  switch(type) {
    case DELETE_PROFILE_ERROR:
    case LOAD_PROFILES_ERROR:
    case AUTHENTICATE_ERROR:
    case UPDATE_USER_PROFILE_ERROR:
    case CREATE_USER_PROFILE_ERROR:
      return {
        ...state,
        active: true,
        type: NOTIFICATION_TYPES.ERROR,
        message: payload || defaultMessage
      };

    case DELETE_PROFILE_SUCCESS:
      return {
        active: true,
        type: NOTIFICATION_TYPES.SUCCESS,
        message: MESSAGES.DELETE.SUCCESS
      };

    case CREATE_USER_PROFILE_SUCCESS:
      return {
        active: true,
        type: NOTIFICATION_TYPES.SUCCESS,
        message: MESSAGES.CREATE.SUCCESS
      };

    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        active: true,
        type: NOTIFICATION_TYPES.SUCCESS,
        message: MESSAGES.UPDATE.SUCCESS
      }

    case CLEAR_NOTIFICATION:
      return {
        ...state,
        active: false,
        type: '',
        message: ''
      }

    default:
      return state;
  }
};

export default reducer;

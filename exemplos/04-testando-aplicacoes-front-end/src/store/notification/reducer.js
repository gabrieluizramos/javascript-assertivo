import {
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  LOAD_PROFILES_ERROR
} from '../profiles/actions';
import {
  AUTHENTICATE_ERROR
} from '../user/actions';

import {
  CLEAR_NOTIFICATION,
  NOTIFICATION_TYPES,
  MESSAGES
} from './actions';

const INITIAL_STATE = {
  active: false,
  type: '',
  message: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const [prefix] = type.split('_');

  switch(type) {
    case DELETE_PROFILE_ERROR:
    case LOAD_PROFILES_ERROR:
    case AUTHENTICATE_ERROR:
      return {
        ...state,
        active: true,
        type: NOTIFICATION_TYPES.ERROR,
        message: payload || MESSAGES[prefix].ERROR
      };

    case DELETE_PROFILE_SUCCESS:
        return {
          active: true,
          type: NOTIFICATION_TYPES.SUCCESS,
          message: MESSAGES.DELETE.SUCCESS
        };

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

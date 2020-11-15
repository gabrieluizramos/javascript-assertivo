import { combineReducers } from 'redux';

import userReducer from './user/reducer';
import profilesReducer from './profiles/reducer';
import notificationsReducer from './notification/reducer';

const reducers = combineReducers({
  user: userReducer,
  profiles: profilesReducer,
  notifications: notificationsReducer
});

export default reducers;

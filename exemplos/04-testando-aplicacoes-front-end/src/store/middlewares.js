import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : any => any;

export default compose(
  applyMiddleware(thunk),
  devTools
);

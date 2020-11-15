import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const withDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default compose(
  applyMiddleware(thunk),
  withDevToolsExtension
);

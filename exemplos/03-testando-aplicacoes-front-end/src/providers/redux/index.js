import { Provider } from 'react-redux';

import store from '../../store';

const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;

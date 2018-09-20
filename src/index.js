import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './Navigator';
import configureStore from './store/configureStore'

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;

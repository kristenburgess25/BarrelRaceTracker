import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/AppContainer';
import store from './store';

const main = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));

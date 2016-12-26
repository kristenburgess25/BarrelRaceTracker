import React from 'react';
import { render, ReactDOM } from 'react-dom';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './store';
import App from './components/App'

const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);

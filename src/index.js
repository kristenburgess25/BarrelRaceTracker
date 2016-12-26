import React from 'react';
import { render, ReactDOM } from 'react-dom';
import Routes from './routes';
import App from './components/App';

import configureStore from './store';
// const initialState = window.__INITIAL_STATE__ || { firebase: { authError: null } };

const store = configureStore();

const target = document.getElementById('root');

const node = (<App store={store} />);

ReactDOM.render(node, target);

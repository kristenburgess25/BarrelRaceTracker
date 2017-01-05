import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App';
import NewEvent from './components/NewEvent';

import './styles/index.css';

import { BrowserRouter, Match, Miss } from 'react-router'


const Root = () => {
  return (
  <BrowserRouter>
    <div>
      <Match exactly pattern='/'
        component={App}/>
    <Match exactly pattern='/addnewevent'
      component={NewEvent}
    />
    </div>
  </BrowserRouter>
)
}

render (
  <Root />, document.querySelector('#root')
)

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import Favorites from './Favorites';
import Header from './Header';
import eventList from './App'

import './index.css';

import { BrowserRouter, Match, Miss } from 'react-router'


const Root = () => {
  return (
  <BrowserRouter>
    <div>
      <Header/>
      <Match exactly pattern='/'
        component={App}/>
      <Match exactly pattern='/favorites'
        component={Favorites}
        eventList={eventList}
      />
    </div>
  </BrowserRouter>
)
}

render (
  <Root />, document.querySelector('#root')
)

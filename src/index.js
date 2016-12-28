import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Favorites from './Favorites';
import eventList from './App';
import NewEvent from './NewEvent';

import './index.css';

import { BrowserRouter, Match } from 'react-router'


const Root = () => {
  return (
  <BrowserRouter>
    <div>
      <Match exactly pattern='/'
        component={App}/>
      <Match exactly pattern='/favorites'
        component={Favorites}
        eventList={eventList}
      />
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

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import barrelraces from './BarrelRaces.js';
// import {shallow, mount, render, map} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('pulls in an array of objects', () => {
  const wrapper = Shallow
  eventList={barrelraces}
})

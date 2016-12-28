import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import barrelraces from './BarrelRaces.js';
import {shallow, mount, render, map} from 'enzyme';

describe('Application | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<App />)
  });

  it('renders a div wrapper', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper.find('div')).toBe.true;
  });
});

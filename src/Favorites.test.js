import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favorites from './Favorites';
import DisplayEvent from './DisplayEvent'
import eventList from './BarrelRaces.js';
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';
const sinon = require('sinon')

describe('Favorites | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Favorites eventList={eventList}/>)
  });
  it('renders an "event-list" ', () => {
    const wrapper = shallow(<Favorites eventList={eventList} />)
    assert(wrapper.find('.event-list'))
  });
  it('renders as a <div>', () => {
    const wrapper = shallow(<Favorites eventList={eventList} />)
    assert.equal(wrapper.type(), 'div')
  });
  it('renders xml elements', () => {
    sinon.spy(Favorites.prototype, 'render')
    const wrapper = mount(<Favorites eventList={eventList} />)
    assert.equal(Favorites.prototype.render.calledOnce, true)
  });
  it.skip('should display only favorited events', () => {
    const wrapper = mount(<Favorites eventList={eventList} />)
    assert(wrapper.find(<DisplayEvent/>).length, 3)
  });
})

// describe('Favorites | Feature Test', () => {
//
// })

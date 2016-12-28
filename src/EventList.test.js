import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EventList from './EventList'
import eventList from './BarrelRaces.js';
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';
const sinon = require('sinon')

describe('EventList | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<EventList eventList={eventList}/>)
  });
  it('renders an "event-list" ', () => {
    const wrapper = shallow(<EventList eventList={eventList} />)
    assert(wrapper.find('.event-list'))
  });
  it('renders as a <div>', () => {
    const wrapper = shallow(<EventList eventList={eventList} />)
    assert.equal(wrapper.type(), 'div')
  });
  it('renders xml elements', () => {
    sinon.spy(EventList.prototype, 'render')
    const wrapper = mount(<EventList eventList={eventList} />)
    assert.equal(EventList.prototype.render.calledOnce, true)
  });
  it.skip('should display both favorited and non-favorite events', () => {

  });
})

// describe('EventList | Feature Test', () => {
//
// })

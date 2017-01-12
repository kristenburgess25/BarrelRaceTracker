import React from 'react';
import ReactDOM from 'react-dom';
import Filter from '../src/components/Filter.js'
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';
import eventList from './helpers/BarrelRaces.js'

const sinon = require('sinon')

describe('Filter | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Filter />)
});
  it('renders a filter form', () => {
    const wrapper = mount(<Filter />)
    assert(wrapper.find('.filter-form'))
  })
  it('sets initial state of addedmoney to an empty string', () => {
    const wrapper = shallow(<Filter/>)
    assert.equal(wrapper.state('addedmoney'), (''))
  });
  it('sets initial state of date to an empty string', () => {
    const wrapper = shallow(<Filter/>)
    assert.equal(wrapper.state('date'), (''))
  });
  it('sets initial state of state to an empty string', () => {
    const wrapper = shallow(<Filter/>)
    assert.equal(wrapper.state('state'), (''))
  });
})

describe('Filter| Feature Test', () => {
  it.skip('should change the "addedmoney" state with user input', () => {
    const wrapper = mount(<Filter eventList={eventList} filteredDisplay={eventList}/>)
    const userInput = wrapper.find('.money')
    userInput.simulate('change', {target: {value: '500'} })
    assert.equal(wrapper.state('fiter-input'), ('500'))
  });
})

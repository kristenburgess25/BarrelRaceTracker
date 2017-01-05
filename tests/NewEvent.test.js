import React from 'react';
import ReactDOM from 'react-dom';
import NewEvent from '../src/components/NewEvent'
import eventList from './helpers/BarrelRaces.js';
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';
const sinon = require('sinon')


describe('NewEvent| Unit Test', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<NewEvent/>)
  });
  it('renders a "new-event-form" ', () => {
    const wrapper = mount(<NewEvent/>)
    assert(wrapper.find('.new-event-form'))
  });
  it('renders "input-fields" ', () => {
    const wrapper = shallow(<NewEvent/>)
    assert(wrapper.find('.input-form-field'))
  });
  it('renders as a <section>', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.type(), 'section')
  });
  it('sets initial state of title to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('title'), (''))
  });
  it('sets initial state of date to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('date'), (''))
  });
  it('sets initial state of location to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('location'), (''))
  });
  it('sets initial state of city to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('city'), (''))
  });
  it('sets initial state of state to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('state'), (''))
  });
  it('sets initial state of sanction to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('sanction'), (''))
  });
  it('sets initial state of addedmoney to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('addedmoney'), (''))
  });
  it('sets initial state of time to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('time'), (''))
  });
  it('sets initial state of entryfee to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('entryfee'), (''))
  });
  it('sets initial state of payout to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('payout'), (''))
  });
  it('sets initial state of contactName to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('conctactName'), (''))
  });
  it('sets initial state of conctactNumber to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('contactNumber'), (''))
  });
  it('sets initial state of description to an empty string', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('description'), (''))
  });
  it('sets initial state of favorite to false', () => {
    const wrapper = shallow(<NewEvent/>)
    assert.equal(wrapper.state('favorite'), (false))
  });
});

describe('NewEvent| Feature Test', () => {
  it('should change the "title" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.title-input')
    userInput.simulate('change', {target: {value: 'Best Barrel Race'} })
    assert.equal(wrapper.state('title'), ('Best Barrel Race'))

  })
  it('should change the "date" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.date-input')
    userInput.simulate('change', {target: {value: 'date'} })
      assert.equal(wrapper.state('date'), ('date'))
  })
  it('should change the "location" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.location-input')
    userInput.simulate('change', {target: {value: 'best location'} })
      assert.equal(wrapper.state('location'), ('best location'))
  })
  it('should change the "city" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.city-input')
    userInput.simulate('change', {target: {value: 'Denver'} })
    assert.equal(wrapper.state('city'), ('Denver'))
  })
  it('should change the "state" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.state-input')
    userInput.simulate('change', {target: {value: 'CO'} })
      assert.equal(wrapper.state('state'), ('CO'))
  })
  it('should change the "sanction" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.sanction-input')
    userInput.simulate('change', {target: {value: 'NBHA'} })
      assert.equal(wrapper.state('sanction'), ('NBHA'))
  })
  it('should change the "addedmoney" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.addedmoney-input')
    userInput.simulate('change', {target: {value: '1000'} })
      assert.equal(wrapper.state('addedmoney'), ('1000'))
  })
  it('should change the "time" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.time-input')
    userInput.simulate('change', {target: {value: '1200'} })
      assert.equal(wrapper.state('time'), ('1200'))
  })
  it('should change the "entryfee" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.entryfee-input')
    userInput.simulate('change', {target: {value: '30'} })
      assert.equal(wrapper.state('entryfee'), ('30'))
  })
  it('should change the "payout" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.payout-input')
    userInput.simulate('change', {target: {value: '80%'} })
      assert.equal(wrapper.state('payout'), ('80%'))
  })
  it('should change the "contactName" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.contactName-input')
    userInput.simulate('change', {target: {value: 'Kristen'} })
      assert.equal(wrapper.state('contactName'), ('Kristen'))
  })
  it('should change the "contactNumber" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.contactNumber-input')
    userInput.simulate('change', {target: {value: '303-349-8791'} })
      assert.equal(wrapper.state('contactNumber'), ('303-349-8791'))
  })
  it('should change the "description" state with new event info', () => {
    const wrapper = mount(<NewEvent/>)
    const userInput = wrapper.find('.description-text-area')
    userInput.simulate('change', {target: {value: 'best event ever'} })
      assert.equal(wrapper.state('description'), ('best event ever'))
  })
  it.skip('can render a new event when "Save Event" button is clicked"', () => {
  })
})

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewEvent from './NewEvent'
import eventList from './BarrelRaces.js';
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
    assert.equal(wrapper.state('contactName'), (''))
  });
  it('sets initial state of contactNumber to an empty string', () => {
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

// describe('NewEvent| Feature Test', () => {
//   it('should change the "fullName" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.image')
//     messageInput.simulate('change', {target: {value: 'First Last Name'} })
//     assert.equal(wrapper.state('fullName'), ('First Last Name'))
//
//   })
//   it('should change the "company" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.company')
//     messageInput.simulate('change', {target: {value: 'company name'} })
//       assert.equal(wrapper.state('company'), ('company name'))
//   })
//   it('should change the "email1" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.email1')
//     messageInput.simulate('change', {target: {value: 'emailaddress1'} })
//       assert.equal(wrapper.state('email1'), ('emailaddress1'))
//   })
//   it('should change the "email2" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.email2')
//     messageInput.simulate('change', {target: {value: 'emailaddress2'} })
//     assert.equal(wrapper.state('email2'), ('emailaddress2'))
//   })
//   it('should change the "cell" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.cell')
//     messageInput.simulate('change', {target: {value: '303-349-8791'} })
//       assert.equal(wrapper.state('cell'), ('303-349-8791'))
//   })
//   it('should change the "home" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.home')
//     messageInput.simulate('change', {target: {value: '303-349-8791'} })
//       assert.equal(wrapper.state('home'), ('303-349-8791'))
//   })
//   it('should change the "work" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.work')
//     messageInput.simulate('change', {target: {value: '303-349-8791'} })
//       assert.equal(wrapper.state('work'), ('303-349-8791'))
//   })
//   it('should change the "google" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.linkedIn')
//     messageInput.simulate('change', {target: {value: 'username'} })
//       assert.equal(wrapper.state('linkedIn'), ('username'))
//   })
//   it('should change the "facebook" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.facebook')
//     messageInput.simulate('change', {target: {value: 'username'} })
//       assert.equal(wrapper.state('facebook'), ('username'))
//   })
//   it('should change the "twitter" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.twitter')
//     messageInput.simulate('change', {target: {value: 'username'} })
//       assert.equal(wrapper.state('twitter'), ('username'))
//       console.log(wrapper.state('twitter'))
//   })
//   it('should change the "github" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.github')
//     messageInput.simulate('change', {target: {value: 'username'} })
//       assert.equal(wrapper.state('github'), ('username'))
//   })
//   it('should change the "notes" state with new contact info', () => {
//     const wrapper = mount(<NewEvent/>)
//     const messageInput = wrapper.find('.notes-text-area')
//     messageInput.simulate('change', {target: {value: 'best friend ever'} })
//       assert.equal(wrapper.state('notes'), ('best friend ever'))
//   })
//   it.skip('can render a new contact when "Save Contact" button is clicked"', () => {
//     const wrapper = mount(<Application />)
//     const messageInput = wrapper.find('.image')
//     messageInput.simulate('change', {target: {value: 'goodmorning'} })
//     wrapper.find('.save-contact-button').simulate('click')
//       assert.equal(wrapper.text(), ('goodmorning'))
//   })
// })

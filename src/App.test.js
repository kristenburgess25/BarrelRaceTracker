import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import barrelraces from './BarrelRaces.js';
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';

const sinon = require('sinon')

describe('App | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<App />)
});
  it('has constructor that sets state of searchText to an empty string', function() {
  const wrapper = shallow(<App />);
  expect(wrapper.state('searchText')).deep.equal('');
});
  it('has constructor that sets state of eventList to an empty array', function() {
  const wrapper = shallow(<App />);
  expect(wrapper.state('eventList')).deep.equal([]);
});
  it('has constructor that sets state of hideFavorites to true', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.state('hideFavorites')).to.equal(true);
});
it('has constructor that sets state of hideMain to false', function() {
  const wrapper = shallow(<App />);
  expect(wrapper.state('hideMain')).to.equal(false);
});

it('renders as a <div>', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  });
  it.skip('can call componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    const wrapper = mount(<App />)
    assert.equal(App.prototype.componentDidMount.calledOnce, true)
  });
  it('should have a search bar', function(){
    const wrapper = shallow(<App />)
    assert.equal(wrapper.find('.search-bar').length, 1)
  });
  it('should have a button for adding a new event', function(){
    const wrapper = shallow(<App />)
    assert.equal(wrapper.find('.addevent-btn').length, 1)
  });
  it('should have a button for showing favorites', function(){
    const wrapper = shallow(<App />)
    assert.equal(wrapper.find('.favorites-btn').length, 1)
  });
  it.skip('renders the EventList component', () => {
    const wrapper = mount(<App eventList={barrelraces} />)
    assert.equal(wrapper.find('.event-list').length,1)
  });
  it.skip('renders the Favorites component', () => {
    const wrapper = mount(<App />)
    assert.equal(wrapper.find('.favorites-list').length,1)
  });
});

describe('App | Feature Tests', () => {
  it.skip('sets the searchText state to the value entered in the search bar', () => {
    const wrapper = mount(<App />)
    const searchInput = wrapper.find('.search-bar')
    searchInput.simulate('change', {target: {value: 'Kristen'} })
    assert.equal(wrapper.state('searchText'), ('Kristen'))
});
})

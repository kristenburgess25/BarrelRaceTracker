import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../src/components/SearchBar.js'
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';

const sinon = require('sinon')

describe('SearchBar | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<SearchBar />)
});
})

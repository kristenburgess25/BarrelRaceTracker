import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/Header.js'
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';

const sinon = require('sinon')

describe('Header | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Header />)
});
})

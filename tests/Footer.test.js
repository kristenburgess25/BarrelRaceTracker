import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../src/components/Footer.js'
import {shallow, mount, render, map} from 'enzyme';
import { assert, expect } from 'chai';

const sinon = require('sinon')

describe('Footer | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Footer />)
});
})

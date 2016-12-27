import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import DisplayEvent from './DisplayEvent'

import { pick, map, extend } from 'lodash';
import firebase, { reference } from './firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
    };
  }

  componentDidMount() {
  reference.on('value', (snapshot) => {
    const barrelraces = snapshot.val() || {};
    this.setState({
      eventList: map(barrelraces, (val, key) => extend(val, { key, name }))
    });
  });
}

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Barrel Bash</h2>
        </div>
        <EventList
          eventList={this.state.eventList}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import DisplayEvent from './DisplayEvent'

class EventList extends Component {
  render() {
    return (
      <div className="EventList">
        <div>
          <h2>BARREL RACES</h2>
          <DisplayEvent />
        </div>
      </div>
    );
  }
}

export default EventList;

import React, { Component } from 'react';
import DisplayEvent from './DisplayEvent'

class EventList extends Component {
  render() {

    const { eventList } = this.props;

    let events = eventList.map(event =>
      <DisplayEvent
        key={event.key}
        event={event}
        markFavorite={this.props.markFavorite}
      />
    )

    return (
      <div className="EventList">
        <div>
          <h2>BARREL RACES</h2>
          { events }
        </div>
      </div>
    );
  }
}

export default EventList;

import React, { Component } from 'react';
import DisplayEvent from './DisplayEvent';
import '../styles/EventList.css'

class EventList extends Component {

  render() {

    const { eventList } = this.props;

    const sortedEvents = eventList.sort(function (a, b) {
      return Date.parse(a.date) - Date.parse(b.date)
  });

    let events = sortedEvents.map(event =>
      <DisplayEvent
        key={event.key}
        event={event}
        toggleFavorite={this.props.toggleFavorite}
      />
    )

    return (
      <div className="event-list">
        <div>
          <h3 className='eventlistheader'>All Events</h3>
          { events }
        </div>
      </div>
    );
  }
}

export default EventList;

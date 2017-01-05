import React, { Component } from 'react';
import DisplayEvent from './DisplayEvent';

class EventList extends Component {

  searchEvents(eventList) {
    let filteredEvents = eventList.filter(event =>
   this.filterEventbyName(event) ||
   this.filterEventbyDate(event)
 )
return this.sortEventsAlphabetically(filteredEvents)
}

  filterEventbyName(event) {
  return(event.props.event.title.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1)
}

sortEventsAlphabetically(filteredEvents) {
  let sortedEvents = filteredEvents.sort(function(a, b) {
    let eventA = a.props.event.title.toLowerCase()
    let eventB = b.props.event.title.toLowerCase()
    if (eventA < eventB) {
      return -1
    }
    if (eventA > eventB) {
      return 1
    }
    return 0
  })
  return sortedEvents
}

  render() {

    const { eventList } = this.props;

    let events = eventList.map(event =>
      <DisplayEvent
        key={event.key}
        event={event}
        toggleFavorite={this.props.toggleFavorite}
      />
    )

    return (
      <div className="event-list">
        <div>
          <h2>BARREL RACES</h2>
          { events }
        </div>
      </div>
    );
  }
}

export default EventList;

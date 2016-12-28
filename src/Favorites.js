import React, { Component } from 'react';
import DisplayEvent from './DisplayEvent';

class Favorites extends Component {
  constructor() {
  super()
}
  render() {

    const { eventList } = this.props;

    let favoritelist = eventList.filter(event =>
    event.favorite === true)

    let favorites= favoritelist.map(event =>
      <DisplayEvent
        key={event.key}
        event={event}
        toggleFavorite={this.props.toggleFavorite}
      />
    )

    return (
      <div className="EventList">
        <div>
          <h2>FAVORITES</h2>
          { favorites }
        </div>
      </div>
    );
  }
}

export default Favorites;

import React, { Component } from 'react';
import DisplayEvent from './DisplayEvent';
import '../styles/Favorites.css'

class Favorites extends Component {
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
      <div className="favorites-list">
        <div>
          <h2>Favorites</h2>
          { favorites }
        </div>
      </div>
    );
  }
}

export default Favorites;

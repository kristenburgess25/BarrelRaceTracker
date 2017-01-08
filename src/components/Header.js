import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

render() {

    return (
      <div className="App-header">
        <h2>Barrel Race Tracker</h2>
        <button
          className='home-btn'
          >
        <Link to="/"
          className='link'>
          ALL EVENTS
         </Link>
        </button>
        <button
          className='favorites-btn'
          >
        <Link to="favorites"
          className='link'
          > FAVORITES </Link>
        </button>
        <button
          className='addEvent-btn'
        >
        <Link to="addnewevent"
          className='link'> ADD NEW EVENT </Link>
        </button>
        <button
          onClick={(e) => this.props.showFilter(e)}>
           FILTER
        </button>
      </div>
    )
  }
}

export default Header;

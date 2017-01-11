import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingPage extends Component {

  render() {
    return (
      <section>
      <h3> WELCOME </h3>
      <button
        className='all-events-btn'
        >
      <Link to="/events"
        className='link'>
        <p className='button-text'>See All Events</p>
       </Link>
      </button>
      <button
        className='addEvent-btn'
      >
      <Link to="addnewevent"
        className='link'> <p className='button-text'> Add New Event </p> </Link>
      </button>
      <button
        className='favorites-btn'
        >
      <Link to="favorites"
        className='link'
        > <p className='button-text'>Favorites</p> </Link>
      </button>

      </section>
    )
  }
  }

export default LandingPage;

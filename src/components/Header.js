import React from 'react';
import { Link } from 'react-router';

const Header = () => {

    return (
      <div className="App-header">
        <h2>Barrel Bash</h2>
        <button
          className='home-btn'
          >
        <Link to="/"> ALL EVENTS </Link>
        </button>
        <button
          className='favorites-btn'
          >
        <Link to="favorites"> FAVORITES </Link>
        </button>
        <button
          className='addEvent-btn'
        >
        <Link to="addnewevent"> ADD NEW EVENT </Link>
        </button>
      </div>
    )
  }

export default Header;

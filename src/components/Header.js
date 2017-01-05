import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => {

    return (
      <div className="App-header">
        <h2>Barrel Bash</h2>
        <button
          className='favorites-btn'
          onClick={(e)=> this.showFavorites(e)}
          >
          FAVORITES
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

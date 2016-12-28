import React from 'react'
import './App.css';
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="App-header">
      <h2>Barrel Bash</h2>
      <input placeholder='SEARCH'></input>
      <button
        className='favorites'
        >
        <Link
          to="/favorites"
          className="favorites-btn"
        >
          Favorites
        </Link>
      </button>
      <button
        className='addEvent-btn'>
        <Link
          to="/addnewevent"
          className="addevent-btn"
        >
          Add New Event
        </Link>
      </button>
    </div>
  )
}

export default Header

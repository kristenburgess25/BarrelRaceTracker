import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Header.css'

class Header extends Component {

render() {

    return (
      <section className="App-header">
        <button
          className='all-events-btn'
          >
        <Link to="/"
          className='link'>
          <p className='button-text'>ALL</p>
         </Link>
        </button>
        <button
          className='addEvent-btn'
        >
        <Link to="addnewevent"
          className='link'> <p className='button-text'>+</p> </Link>
        </button>

        <h2 className='title'>Barrel Race Tracker</h2>

        <button
          onClick={(e) => this.props.showFilter(e)}>
           <p className='button-text'>FILTER</p>
        </button>
        <button
          className='favorites-btn'
          >
        <Link to="favorites"
          className='link'
          > <p className='button-text'>♡</p> </Link>
        </button>
    </section>
    )
  }
}

export default Header;

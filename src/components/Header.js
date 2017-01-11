import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Header.css'

class Header extends Component {

render() {

    return (
      <section className="App-header">
        <h2 className='title'>Barrel Race Tracker</h2>
        <nav>
        <button
          className='all-events-btn'
          >
        <Link to="/events"
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
        <button
          onClick={(e) => this.props.showFilter(e)}>
           <p className='button-text'>FILTER</p>
        </button>
      
        <Link to="favorites"
          className='link'
          > <p className='button-text'>♡</p> </Link>

      </nav>
    </section>
    )
  }
}

export default Header;

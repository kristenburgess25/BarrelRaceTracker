import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Header.css'
import classnames from 'classnames';

class Header extends Component {
  constructor(){
    super()
    this.state = {
      allActive: true,
      addActive: false,
      facvoritesActive: false,
    }
  }

render() {

  let classes = classnames('all-events-btn', {active: this.state.allActive});

    return (
      <section className="App-header">
        <h2 className='title'>Barrel Race Tracker</h2>
        <nav>
        <button
          className={classes}
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
      </nav>
    </section>
    )
  }
}

export default Header;

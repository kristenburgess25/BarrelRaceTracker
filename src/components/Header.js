import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

render() {

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
        <button className='sort-btn'>
          <Link to='/sort'>
            SORT
          </Link>
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

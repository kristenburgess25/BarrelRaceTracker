import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/Header.css'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      allActive: true,
      addActive: false,
      favoritesActive: false,
    }
  }

render() {

    return (
      <section className="App-header">
        <h2 className='title'>Can Chaser</h2>
        <nav>
        <button
          className={`all-events-btn ${this.state.allActive}`}
          onClick={()=> this.setState({
            allActive: true,
            addActive: false,
            favoritesActive: false
          })}
        >
          <Link to="/"
            className='link'>
            <p className='button-text'>ALL</p>
         </Link>
        </button>
        <button
          className={`addEvent-btn ${this.state.addActive}`}
          onClick={()=> this.setState({
            allActive: false,
            addActive: true,
            favoritesActive: false
          })}
        >
          <Link to="addnewevent"
            className='link'>
            <p className='button-text'>+</p>
          </Link>
        </button>
        <button
          onClick={(e) => this.props.showFilter(e)}>
           <p className='button-text'>FILTER</p>
        </button>
        <button
          className={`favorites-btn ${this.state.favoritesActive}`}
        >
          <Link to="favorites"
            className='link'
            onClick={()=> this.setState({
              allActive: false,
              addActive: false,
              favoritesActive: true
            })}
          >
          <p className='button-text'>♡</p> </Link>
        </button>
      </nav>
    </section>
    )
  }
}

export default Header;

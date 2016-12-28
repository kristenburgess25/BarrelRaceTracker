import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import DisplayEvent from './DisplayEvent'
import Favorites from './Favorites'
import { Link } from 'react-router'
import { pick, map, extend } from 'lodash';
import firebase, { reference } from './firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      eventList: [],
      hideFavorites: true,
    };
  }

  componentDidMount() {
  reference.on('value', (snapshot) => {
    const barrelraces = snapshot.val() || {};
    this.setState({
      eventList: map(barrelraces, (val, key) => extend(val, { key, name }))
    });
  });
}

toggleFavorite (key, favorite) {
  this.state.eventList.map(event => {
        if(key === event.key) {
          console.log(key);
          console.log(event.key);
          firebase.database().ref(`${key}`).update({
            favorite: !event.favorite
          });
          console.log(event.favorite)
        } else {
          console.log('returned')
          return
        }
      })
    }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Barrel Bash</h2>
          <input placeholder='SEARCH'></input>
          <button
            className='favorites'
            onClick={() => {this.setState(
              {hideFavorites: false})}}
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
            Add Event
          </button>
        </div>
        <EventList
          eventList={this.state.eventList}
          toggleFavorite={this.toggleFavorite.bind(this)}
        />
      <Favorites
        eventList={this.state.eventList}
        toggleFavorite={this.toggleFavorite.bind(this)}
        hidden={this.state.hideFavorites}
      />
      <footer>
        <p> Sort </p>
        <p> Filter </p>
      </footer>
      </div>
    );
  }
}

export default App;

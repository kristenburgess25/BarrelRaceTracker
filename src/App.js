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
      hideMain: false,
    }
  }

  componentDidMount() {
  reference.on('value', (snapshot) => {
    const barrelraces = snapshot.val() || {};
    this.setState({
      eventList: map(barrelraces, (val, key) => extend(val, { key, name }))
    });
  });
}

  showFavorites() {
    this.setState({
      hideFavorites: !this.state.hideFavorites,
      hideMain: !this.state.hideMain,
    })
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
    };

  render() {

    const { eventList } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Barrel Bash</h2>
          <input placeholder='SEARCH'></input>
          <button
            className='favorites'
            onClick={()=> this.showFavorites()}
            >
            FAVORITES
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

        <div hidden={this.state.hideMain}>
        <EventList
          eventList={eventList}
          toggleFavorite={this.toggleFavorite.bind(this)}
        />
        </div>

      <div hidden={this.state.hideFavorites}>
      <Favorites
        eventList={eventList}
        toggleFavorite={this.toggleFavorite.bind(this)}
      />
      </div>
      <footer>
        <p> Sort </p>
        <p> Filter </p>
      </footer>
      </div>
    );
  }
};

export default App;

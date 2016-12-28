import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import Favorites from './Favorites'
import { Link } from 'react-router'
import { map, extend } from 'lodash';
import firebase, { reference } from './firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      hideFavorites: true,
      hideMain: false,
      searchText: '',
    }
  }

  componentDidMount() {
  reference.on('value', (snapshot) => {
    const barrelraces = snapshot.val() || {};
    this.setState({
      eventList: map(barrelraces, (val, key) => extend(val, { key }))
    });
  });
}

  showFavorites() {
    this.setState({
      hideFavorites: !this.state.hideFavorites,
      hideMain: !this.state.hideMain,
    })
  }



toggleFavorite (key) {
  console.log(this.state.eventList)
  this.state.eventList.map(event => {
        if(key === event.key) {
        firebase.database().ref('barrelraces').child(key).update({
            favorite: !event.favorite,
          })
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
          <input
            placeholder='SEARCH'
            className='search-bar'>
          </input>
          <button
            className='favorites-btn'
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

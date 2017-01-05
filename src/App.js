import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import Favorites from './Favorites';
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

  updateSearch(e) {
  this.setState({ searchText: e.target.value })
}

toggleFavorite (key) {
  this.state.eventList.map(event => {
        if(key === event.key) {
        return firebase.database().ref('barrelraces').child(key).update({
            favorite: !event.favorite,
          })
        } else {
          return false;
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
            className='search-bar'
            onChange={(e)=> this.updateSearch(e)}
            >
          </input>
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

        <div hidden={this.state.hideMain}>
        <EventList
          eventList={eventList}
          toggleFavorite={this.toggleFavorite.bind(this)}
          searchText={this.state.searchText}
        />
        </div>

      <div hidden={this.state.hideFavorites}>
      <Favorites
        eventList={eventList}
        toggleFavorite={this.toggleFavorite.bind(this)}
        searchText={this.state.searchText}
      />
    <div hidden={this.state.hideNew}>
    </div>
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

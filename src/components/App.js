import React, { Component } from 'react';
import '../styles/App.css';
import EventList from './EventList';
import Favorites from './Favorites';
import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';
import { Link } from 'react-router';
import { map, extend } from 'lodash';
import firebase, { reference } from '../firebase';


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
        <Header />
        <SearchBar />
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
      </div>
      <Footer />
      </div>
    );
  }
};

export default App;

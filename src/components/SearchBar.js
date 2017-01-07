import React, { Component } from 'react';

class SearchBar extends Component {
  filterEvents(e) {
    const searchText = e.target.value.toLowerCase();
    if (searchText.length >= 1) {
      let filteredEvents = this.props.eventList.filter(event => {
        return event.title.toLowerCase().includes(searchText) || event.date.toLowerCase().includes(searchText) || event.location.toLowerCase().includes(searchText) ||
        event.city.toLowerCase().includes(searchText) || event.state.toLowerCase().includes(searchText) || event.city.toLowerCase().includes(searchText)
      });
      this.props.filteredDisplay(filteredEvents);
    } else {
      this.props.filteredDisplay(null);
    }
  }

    render() {

    return (
      <div>
        <input
          className="search-input"
          value={this.props.searchText}
          placeholder='SEARCH'
          onChange={(e)=> this.filterEvents(e)}/>
      </div>
    )
  }
}


export default SearchBar;

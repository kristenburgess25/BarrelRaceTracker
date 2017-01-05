import React, { Component } from 'react';

const SearchBar = () => {

    return (
      <div className="search-bar-container">
        <input
          placeholder='SEARCH'
          className='search-bar'
          onChange={(e)=> this.updateSearch(e)}
          >
        </input>
      </div>
    )
  }

export default SearchBar;

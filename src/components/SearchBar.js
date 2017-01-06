import React from 'react';

const SearchBar = ({ updateSearch }) => {

    return (
      <div className="search-bar">
        <input
          className="search-input"
          placeholder='SEARCH'
          className='search-bar'
          onChange={updateSearch}
          >
        </input>
      </div>
    )
  }

export default SearchBar;

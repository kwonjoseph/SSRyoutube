import React from 'react';
import ReactDOM from 'react-dom';

const Search = (props) => (
  <div className="search">
    <input className="search-bar" type="text" onKeyPress={props.handleSearchChange} size='60' />
    <button type='button' className="search-btn" onClick={props.handleSearch}>
      Search
    </button>
  </div>
);

export default Search;

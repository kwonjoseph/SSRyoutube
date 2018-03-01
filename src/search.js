import React from 'react';

const Search = (props) => (
  <div id="search">
    <input className="search-bar" type="text" />
    <button className="search-btn" onClick={() => props.handleSubmit('Vegeta')}>
      Search
    </button>
  </div>
);

export default Search;

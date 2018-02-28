import React from 'react';
import ReactDOM from 'react-dom';

const Search = (props) => (
  <div id="search">
    <input className="search-bar" type="text" />
    <button className="search-btn" onClick={props.handleSubmit}>
      Search
    </button>
  </div>
)

export default Search;

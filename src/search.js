import React from 'react';
import ReactDOM from 'react-dom';

const Search = (props) => (
  <div className='search'>
    <input id='input' className="search-bar" type='text' onKeyPress={props.handleEnter} size='60' />
    <button type='button' className='search-btn' onClick={() => {props.handleSearch()}}>
      Search
    </button>
  </div>
);

export default Search;

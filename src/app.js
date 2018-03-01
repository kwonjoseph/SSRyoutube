import React from 'react';
import UserComments from './user-comments.js';
import Player from './player.js';
import Search from './search.js';
import VideoList from './video-list.js';
import uriBuilder from './uri-builder.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    let videoTemplate = {
      id: {
        videoId: ''
      },
      snippet: {
        description: '',
        thumbnails: {
          default: {
            url: ''
          }
        },
        title: ''
      }
    }
    this.state = {
      currentVideo: props.currentVideo || videoTemplate,
      searchField: '',
      comments: ['comment']
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      searchField: e.target.value
    });
    if (e.key === 'Enter') {
      this.handleSearch(e.target.value);
    }
  }

  handleSearch(search = this.state.searchField) {
    if (search.length) {
      location.href = '/search?term=' + search;
    }
  }

  render () {
    return (
        <div id="interface" style={{margin: 'auto', width: '70%'}}>
          <Search handleSearch={this.handleSearch} handleSearchChange={this.handleSearchChange}/>
          <Player video={this.state.currentVideo}/>
          <VideoList/>
          <UserComments comments={this.state.comments}/>
        </div>
    )
  }
}

export default App;

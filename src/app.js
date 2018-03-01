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
    };
    let commentTemplate = {
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: ''
          },
          textOriginal: ''
        }
      }
    }
    this.state = {
      currentVideo: props.currentVideo || videoTemplate,
      similarVideos: props.similarVideos || [videoTemplate, videoTemplate, videoTemplate, videoTemplate, videoTemplate],
      videoHistory: props.similarVideos || [videoTemplate, videoTemplate, videoTemplate, videoTemplate, videoTemplate],
      searchField: '',
      comments: props.comments || [commentTemplate]
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
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

  handleVideoChange(e) {
      location.href = '/search?term=' + e.target.value;
  }

  render () {
    return (
        <div id="interface" style={{margin: 'auto', width: '70%'}}>
          <Search handleSearch={this.handleSearch} handleSearchChange={this.handleSearchChange}/>
          <Player video={this.state.currentVideo}/>
          <VideoList similarVideos={this.state.similarVideos} handleVideoChange={this.handleVideoChange}/>
          <UserComments comments={this.state.comments}/>
        </div>
    )
  }
}

export default App;

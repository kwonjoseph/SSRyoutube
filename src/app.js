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
    let historyTemplate = {
      thumbnail: '',
      title: ''
    }
    let ratingTemplate = {
      likeCount: 0,
      dislikeCount: 0
    }
    this.state = {
      currentVideo: props.currentVideo || videoTemplate,
      similarVideos: props.similarVideos || [videoTemplate, videoTemplate, videoTemplate, videoTemplate, videoTemplate],
      videoHistory: props.videoHistory|| [historyTemplate, historyTemplate, historyTemplate, historyTemplate, historyTemplate],
      searchField: '',
      comments: props.comments || [commentTemplate],
      rating: props.rating || ratingTemplate
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    if (e.key === 'Enter' && e.target.value.length) {
      this.handleSearch(e.target.value);
    }
  }

  handleSearch(search = document.getElementById('input').value) {
    if (search.length) {
      location.href = '/search?term=' + search;
    }
  }

  render () {
    return (
        <div id='interface' style={{margin: 'auto', width: '70%'}}>
          <Search handleSearch={this.handleSearch} handleSearchChange={this.handleSearchChange} handleEnter={this.handleEnter}/>
          <Player video={this.state.currentVideo} rating={this.state.rating}/>
          <VideoList similarVideos={this.state.similarVideos} handleVideoChange={this.handleVideoChange} videoHistory={this.state.videoHistory}/>
          <UserComments comments={this.state.comments}/>
        </div>
    )
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import UserComments from './user-comments.js';
import Player from './player.js';
import Search from './search.js';
import VideoList from './video-list.js';
import UriBuilder from './uri-builder.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {
        id: {
          videoId: '9XWU5FtZ22E?start=316&autoplay=1'
        }
      },
      comments: ['comment']
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //api call to youtube
    fetch(UriBuilder('https://www.googleapis.com/youtube/v3/search', {
          key: process.env.YOUTUBE,
          part: 'snippet',
          q: e,
          maxResults: 5,
          type: 'video'
        })
    )
      .then(response => response.json()
      )
      .then(content => {
        console.log(content);
      });
  }

  render () {
    return (
      <div id="interface" style={{margin: 'auto', width: '70%'}}>
        <Search handleSubmit={this.handleSubmit}/>
        <Player video={this.state.currentVideo}/>
        <VideoList/>
        <UserComments comments={this.state.comments}/>
      </div>
    )
  }
}

export default App;

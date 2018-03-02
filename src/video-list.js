import React from 'react';
import VideoEntry from './video-entry.js';
import VideoHistory from './video-history.js';

const VideoList = (props) => (
  <div className="video-list" style={{float: 'right', width: '20%'}}>
  <div className="similar-videos" style={{float: 'right', width: '100%'}}>
    <hr3>Similar Videos</hr3>
      {props.similarVideos.map((video, idx) =>
          <VideoEntry key={idx} thumbnail={video.snippet.thumbnails.default.url} title={video.snippet.title}/>
      )}
  </div>
  <div className="video-history" style={{float: 'right', width: '100%'}}>
    <hr></hr>
    <hr3>Video History</hr3>
      {props.videoHistory.map((video, idx) =>
          <VideoHistory key={idx} thumbnail={video.thumbnail} title={video.title}/>
      )}
  </div>
</div>
);

export default VideoList;

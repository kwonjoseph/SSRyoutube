import React from 'react';

const Player = (props) => {
  return (
    <div className='video-player'>
      <iframe height='350' width='600' src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
      <div className="video-details">
        <h3>title</h3>
        <h3>description</h3>
      </div>
    </div>

  )
};

export default Player;

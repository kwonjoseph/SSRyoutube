import React from 'react';

const Player = (props) => {
  return (
    <div className='video-player' style={{float: 'left', width: '80%'}}>
      <iframe height='350' width='600' src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
      <div className="video-details">
        <h3 style={{fontSize: '100%'}}>{props.video.snippet.title || x}</h3>
        <h3 style={{fontSize: '70%'}}>{props.video.snippet.description || x}</h3>
      </div>
    </div>

  )
};

export default Player;

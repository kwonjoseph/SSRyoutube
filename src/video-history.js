import React from 'react';

const VideoHistory = (props) => (
  <div className='videoEntry'>
    <div className='thumbnail' style={{float: 'left'}}>
      <img src={props.thumbnail}/>
    </div>
    <div className='description-link' style={{float: 'left'}}>
      <a href={'/search?term=' + props.title} style={{fontSize: '70%'}}>{props.title || x}</a>
    </div>

  </div>
);

export default VideoHistory;

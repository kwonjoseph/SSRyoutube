import React from 'react';

const UserComment = (props) => (
  <div className='comment'>
    <b>{props.user}</b>
    <br></br>
    <small>{props.commentText}</small>
  </div>
);

export default UserComment;

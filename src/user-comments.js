import React from 'react';
import UserComment from './user-comment.js';

const UserComments = (props) => (
  <div id="comments">
    <hr></hr>
    <h3>Top Comments</h3>
    {props.comments.map((comment, idx) =>
        <UserComment key={idx}/>
    )}
  </div>
);

export default UserComments;

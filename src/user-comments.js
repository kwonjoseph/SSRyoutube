import React from 'react';
import UserComment from './user-comment.js';

const UserComments = (props) => (
  <div className="comments" style={{width: '80%'}}>
    <hr></hr>
    <h3>Comments</h3>
    {props.comments.map((comment, idx) =>
        <UserComment key={idx} commentText={comment.snippet.topLevelComment.snippet.textOriginal} user={comment.snippet.topLevelComment.snippet.authorDisplayName}/>
    )}
  </div>
);

export default UserComments;

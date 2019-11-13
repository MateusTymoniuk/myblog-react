import React from 'react';
import './styles.css';

const Post = ({title, body}) => (
  <div className="posts-item">
    <h1>{title}</h1>
    <div className="posts-body">
      <p>{body}</p>
    </div>
  </div>
);

export default Post;
import React, { Component } from 'react';

import './styles.css';
import Post from '../../components/Post';

export class PostsPage extends Component {

  state = {
    posts: [
      {
        id: 1,
        title: 'Post 1 - Header',
        body: 'Post 1 - Body'
      },
      {
        id: 2,
        title: 'Post 2 - Header',
        body: 'Post 2 - Body'
      },
      {
        id: 3,
        title: 'Post 3 - Header',
        body: 'Post 3 - Body'
      },
    ]
  };

  

  render() {
    return (
      <div className="posts">
        {this.state.posts.map((post) => 
          <Post key={post.id} title={post.title} body={post.body} />
        )}
      </div>
    );
  }
}

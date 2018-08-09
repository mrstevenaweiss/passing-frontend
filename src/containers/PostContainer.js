import React, { Component } from 'react';
import Post from '../components/Post';

class PostContainer extends Component {
  render() {
    return (
      <div className="post-container">
        <Post />
      </div>
    );
  }
}

export default PostContainer;

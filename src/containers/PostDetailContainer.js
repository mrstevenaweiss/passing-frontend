import React, { Component } from 'react';
import PostDetail from '../components/PostDetail'
import { connect } from 'react-redux'
import '../App.css'

class PostDetailContainer extends Component {
  render() {
    return (
      <div className="post-detail-container">
        <PostDetail match={this.props.match}/>
      </div>
    );
  }
}

export default PostDetailContainer;

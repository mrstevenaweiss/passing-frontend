import React, { Component } from 'react';
import PostNew from '../components/PostNew'
import { connect } from 'react-redux'
import '../App.css'


class PostNewContainer extends Component {
  render() {
    return (
      <div className="post-new-container">
          <PostNew />
      </div>
    );
  }
}

// const mapStateToProps = state => ({ posts: state.posts })

export default connect(null, null)(PostNewContainer)

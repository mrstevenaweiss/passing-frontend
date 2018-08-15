import React, { Component } from 'react';
import Login from '../components/Login'
import { connect } from 'react-redux'

class PostsListContainer extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(PostsListContainer)

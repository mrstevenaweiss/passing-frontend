import React, { Component } from 'react';
import PostsList from '../components/PostsList'
import Search from '../components/Search'
import { connect } from 'react-redux'

class PostsListContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <PostsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(PostsListContainer)

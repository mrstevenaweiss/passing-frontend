import React, { Component } from 'react';
import PostsList from '../components/PostsList'
import Search from '../components/Search'
import { connect } from 'react-redux'
import '../App.css'

class PostsListContainer extends Component {
  render() {
    return (
      <div className='posts-list-container'>
        <Search />
        <PostsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(PostsListContainer)

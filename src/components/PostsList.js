import React, { Component } from 'react';
import Post from './Post';
import { fetchPosts } from "../actions"
import { connect } from 'react-redux'


class PostsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { error, loading, posts } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    console.log(this.props.posts)

    return (
        <ul>
          {
          this.props.posts.map(post =>
            <Post key={post.id} post={post} />
          )
          }
        </ul>
      )
     }
   }

const mapStateToProps = (state) => {
    return {
      posts: state.filteredPosts
    }
  }

export default connect(mapStateToProps, null)(PostsList);

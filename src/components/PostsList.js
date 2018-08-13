import React, { Component } from 'react';
import Post from "./Post";
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
        this.props.posts.map(post => <li key={post.id}>{post.headline}</li>)
        }
      </ul>
    )
         // <ul>
         //   {this.props.posts.map(post =>
         //     <li key={post.id}>{post.title}</li>
         //   )}
         // </ul>

     }
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts
    }
  }

export default connect(mapStateToProps, null)(PostsList);

//     componentDidMount () {
//       //this is where I'd want to fetch to api
//       // dispatch an action
//       this.props.getPosts()
//     }
//
//
//     render() {
//       const { posts } = this.props;
//       const postList = posts.map(post => {
//         return (
//           <Post
//               key={post.id}
//               post={post}
//           />
//         )
//       });
//       return(
//         <ul className="list-group my-6">
//           {this.renderPosts()}
//         </ul>
//       );
//     }
//   };
//
//
//   const mapStateToProps = (state) => {
//     return {
//       posts: state.posts
//     }
//   }
//
// export default connect(null, { getPosts })(PostsList)

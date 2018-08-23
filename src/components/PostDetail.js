import React from 'react';
import CommentBox from '../components/CommentBox'

import { connect } from 'react-redux'
//
class PostDetail extends React.Component {

  state = {
    currentPost: {
      id: null,
      headline: null,
      encounter: null
    }
  }

  componentDidMount(){
    console.log("postDetail props:", this.props);
    const { postId } = this.props.match.params;
    const post = this.props.posts.find(post => post.id === parseInt(postId))
    this.setState({
      currentPost: post
    });
  }

  render () {
    if (this.state.currentPost) {
      return (
        <div>
          <li key={this.state.currentPost.id} className="list-group-item my-6" >
              <div
                className="post-detail">
                  <div className="post-detail-title"><strong>{this.state.currentPost.headline}</strong></div>
                  <div>{this.state.currentPost.first_name}</div>
                  <div>{this.state.currentPost.email}</div>
                  <div>{this.state.currentPost.where}</div>
                <div className="post-item text"><strong>{this.state.currentPost.encounter}</strong>
                </div>
              </div>
          </li>
          <div className="commentbox">
            <CommentBox />
          </div>
        </div>
    )
  } else {
    return null
  }
  };
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(PostDetail)

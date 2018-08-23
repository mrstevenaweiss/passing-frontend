import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comment from '../components/Comment'


class CommentList extends Component {

  render() {
    const commentNodes = this.props.comments.map((comment) => {
      return (
        <Comment name={comment.name} key={comment.id} body={comment.body} />
      );
    });

    return (
    <div className="CommentList">
        {commentNodes}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log('mapState CommentList', state.selectedPost.comments)
    return {
      comments: state.selectedPost.comments
    }
  }
export default connect(mapStateToProps, null)(CommentList);

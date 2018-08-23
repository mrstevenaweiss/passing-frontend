import React, { Component } from 'react';
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

import { connect } from 'react-redux'

class CommentBox extends Component {

  render() {
    return (
    <div className="commentbox-components">
        <h2>Comments</h2>
        <CommentList />
        <CommentForm />
    </div>
    );
  }
}

export default connect(null, null)(CommentBox);

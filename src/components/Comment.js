import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comment extends Component {

  render() {
    console.log('comment props', this.props);
    return (
      <div className="comment">
        <br/>
        <h6 className="commentName">
          {this.props.name} : <span>{this.props.body}</span>
        </h6>

      </div>
    );
  }
}

export default connect(null, null)(Comment);

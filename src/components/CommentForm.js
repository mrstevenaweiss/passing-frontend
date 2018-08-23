import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postComment } from '../actions'

class CommentForm extends Component {

  state = {
      name: "",
      body: ""
  }

  getComments = () => {
    return fetch('http://localhost:3002/api/v1/comments')
    .then(res => res.json())
    .then(json => console.log(json))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('comment state', this.state.name, this.state.body, this.props.selectedPost.id);
    const { name, body } = this.state
    const post_id = this.props.selectedPost.id

    return fetch('http://localhost:3002/api/v1/comment', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({comment: { name, body, post_id  } })
    }
  ).then(res => res.json())
  .then(json => {
    this.props.postComment(json)
  })
  .then((e) => {
    this.setState({
        name: "",
        body: ""
      })
    })
}

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleTextChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  render() {
      return (
        <form className="commentForm" onSubmit={this.handleSubmit} ref="form">
          <input
            type="text"
            placeholder="Your name"
            ref="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="Say something..."
            ref="body"
            value={this.state.body}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Comment" />
        </form>
      );
    }
  }


  const mapStateToProps = (state) => {
    return {
      selectedPost: state.selectedPost
    }
  }



export default connect(mapStateToProps, { postComment })(CommentForm);

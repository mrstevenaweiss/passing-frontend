import React from 'react';
// import { selectPost } from '../actions'

import { connect } from 'react-redux'
//
class PostDetail extends React.Component {

  state = {
    currentPost: {
      id: null,
      headline: null,
      enctouner: null
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
        <li key={this.state.currentPost.id} className="list-group-item my-6" onClick={() => console.log('i love things')}>
          <div
            className="post-item title">
            <div><strong>{this.state.currentPost.headline}</strong></div>
          <div>
            <span className="post-item text">{this.state.currentPost.encounter}</span>
        </div>
      </div>

      <div
        className="post-item reply-button"
        onClick={() => console.log}>
        {/* &#x21b3; */}
      </div>
    </li>
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

//     <div className='post' onClick={() => props.selectPost(props.post) }>
//       {/* <img alt={props.post.name} src={props.post.image_url} /> */}
//       <h2> First Name: {props.post.first_name} </h2>
//       <h3> Headline: {props.post.title} </h3>
//       <h3> Contact: {props.post.email} </h3>
//       <h3> Where: {props.post.where} </h3>
//       <p> Encounter: {props.post.encounter} </p>
//     </div>


//     const { reminders } = this.props
//     return (

//     )

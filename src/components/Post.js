import React from 'react';
import { selectPost } from '../actions'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
//
const Post = props => {
  console.log(this.props);
  return (
      <li key={props.post.id} className="list-group-item my-6" onClick={() => props.selectPost(props.post)}>
        <div
          className="post-item title">
          <div><strong>{props.post.headline}</strong></div>
            <div>
              <span className="post-item text">{props.post.encounter}</span>
            <Link to={`/posts/${props.post.id}`}>Click here asshole</Link>
            </div>
        </div>

        <div
          className="post-item reply-button"
          onClick={() => console.log}>
          {/* &#x21b3; */}
        </div>
      </li>
    )
};

const mapStateToProps = (state, ownProps) => {
  const selected = state.selectPost.id === ownProps.post.id
  return {
    selected
  }
}

export default connect(null, { selectPost })(Post)

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

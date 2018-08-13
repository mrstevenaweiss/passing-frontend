// import React from "react";
// import { selectPost } from '../actions'
//
// import { connect } from 'react-redux'
//
// const Post = props => {
//   console.log(props)
//   return (
//     <div className='post' onClick={() => props.selectPost(props.post) }>
//       {/* <img alt={props.post.name} src={props.post.image_url} /> */}
//       <h2> First Name: {props.post.first_name} </h2>
//       <h3> Headline: {props.post.title} </h3>
//       <h3> Contact: {props.post.email} </h3>
//       <h3> Where: {props.post.where} </h3>
//       <p> Encounter: {props.post.encounter} </p>
//     </div>
//   );
// };
//
// const mapStateToProps = (state, ownProps) => {
//   const selected = state.selectPost.id === ownProps.post.id
//   return {
//     selected
//   }
// }
//
// export default connect(mapStateToProps, { selectPost })(Post)

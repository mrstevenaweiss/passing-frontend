// import { ADD_REMINDER, FETCH_POSTS, SELECT_POST } from '../constants'

// export const addReminder = (title, text) => {
//   const action = {
//     type: ADD_REMINDER,
//     title,
//     text
//   }
//   console.log('action in addReminder', action)
//   return action;
// }
//
// export const selectPost = (post) => {
//   return {
//     type: 'SELECT_POST',
//     payload: {
//       post
//     }
//   }
// }

import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../constants'

export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return fetch('http://localhost:3000/posts')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log("OI", json)
        dispatch(fetchPostsSuccess(json));
        return json.posts;
      })
      .catch(error => dispatch(fetchPostsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});



//
// export const getPosts = () => {
//   return (dispatch) => {
//     fetch('http://localhost:3000/posts')
//     .then(resp => resp.json())
//     .then(result => {
//       // console.log(result)
//       dispatch({
//         type: 'FETCH_POSTS',
//         payload: {
//           posts: result
//         }
//       })
//     })
//   }
// }

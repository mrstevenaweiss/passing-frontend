
import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SELECT_POST,
  SEARCH_POSTS,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS
} from '../constants'

export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    return fetch('http://localhost:3000/posts')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
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

export const addPost = (newPost) => {
  return dispatch => {
    const url = `http://localhost:3000/posts`
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }
    // dispatch(createPostBegin());
    return fetch(url,options)
      .then(handleErrors)
      .then(res => res.json())
      .then(post => {
        // dispatch(createPostSuccess(post))
        return post;
      })
    }
  }

// export const createPostBegin = () => ({
//     type: CREATE_POST_BEGIN
// });
//
// export function createPostSuccess(newPost) {
//   return {
//     type: CREATE_POST_SUCCESS,
//     payload: newPost
//   };
// }


export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: {
      post
    }
  };
}

export const search = (searchTerm) => {
  return {
    type: SEARCH_POSTS,
    payload:{
      searchTerm
    }
  };
}


import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SELECT_POST,
  SEARCH_POSTS
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

export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: {
      post
    }
  };
}

export const search = (searchTerm) => {
  console.log("in action", searchTerm)
  return {
    type: SEARCH_POSTS,
    payload:{
      searchTerm
    }
  };
}

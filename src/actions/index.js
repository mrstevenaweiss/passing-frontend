
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
    return fetch('http://localhost:3002/api/v1/posts')
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
const handleErrors = (response) => {
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

const postPost = (newPost) => {
  console.log('first hit', newPost)
  return fetch(`http://localhost:3002/api/v1/posts`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(newPost)
  }).then(res => res.json())
    .then(res => console.log("after response", res)
  )
}

export const addPost = (newPost) => {
  return (dispatch) => {
    postPost(newPost)
    .then(result => console.log("TRYING TO LOGIN", result));
    // dispatch(userLogin({email: user.user.email, password: user.user.password}))
  }
}

const signUp = (user) => {
  console.log('signup adapter', user);
  return fetch(`http://localhost:3002/api/v1/users`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(user)
  }).then(res => res.json())
  .then(data => console.log("hitting the signup", data))
}

export const signup = (user) => {
  console.log('signup', user);
  return (dispatch) => {
    signUp(user)
    .then(result => console.log("TRYING TO SIGNUP", result));
    // dispatch(userLogin({email: user.user.email, password: user.user.password}))
  }
}

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


import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SELECT_POST,
  SEARCH_POSTS,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  SIGNUP,
  LOGIN,
  LOGOUT
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
    .then(result => console.log("TRYING TO ADD POST", result));
    // dispatch(userLogin({email: user.user.email, password: user.user.password}))
  }
}

const userSignup = (user) => {
  console.log('signUp adapter', user);
  return fetch(`http://localhost:3002/api/v1/users`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({user: user})
  }).then(res => res.json())
}

export const signup = (user) => {
  console.log('signup', user);
  return (dispatch) => {
    userSignup(user)
    .then(result => console.log("TRYING TO SIGNUP", result));
    login(console.log('login in action'))
  }
}

const userLogin = (user) => {
  return fetch(`http://localhost:3002/api/v1/login`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(user)
  }).then(res => res.json())
  .catch(error => console.log('you wrong bruh'));
}

export const login = (user) => {
  console.log('login', user);
  return (dispatch) => {
    userLogin(user)
    .then(user => {
        // debugger;
        user.error !== "User no existo" ?
        dispatch({
          type: LOGIN,
          payload: {user}
        })
        :
        console.log('YOU FOOL');
      })
    };
  }

  export const logout = (something) => {
    console.log('logout', something);
  }

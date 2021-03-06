import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SELECT_POST,
  SEARCH_POSTS,
  CREATE_POST_SUCCESS,
  SIGNUP,
  LOGIN,
  LOGOUT,
  POST_COMMENT
} from '../constants'

const initialState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: {
    comments: []
  },
  value: '',
  filteredPosts: [],
  currentUser: null
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {

    case POST_COMMENT:
      console.log('<POSTING>COMMENT</POSTING>');
      return {
        ...state,
        selectedPost: {
          comments: [...state.selectedPost.comments, action.payload]
        }
      }

    case SIGNUP:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        currentUser: action.payload.user
      };

    case LOGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      localStorage.setItem("currentUser", action.payload.user.email)
      return {
        ...state,
        currentUser: action.payload.user
      };

    case LOGOUT:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...initialState
      };


    case FETCH_POSTS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_POSTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server

      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        filteredPosts: action.payload.posts
      };

    case FETCH_POSTS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        posts: []
      };

      case SELECT_POST:
        return {
          ...state,
          selectedPost: action.payload.post
        }

      case SEARCH_POSTS:
          // const posts = state.contents.filter((val) => val.includes(value));
          // console.log("in reducer", action.payload.searchTerm);
          const term = action.payload.searchTerm.toLowerCase()
          return {
            ...state,
            filteredPosts: state.posts.filter(post => post.headline.toLowerCase().includes(term) || post.encounter.toLowerCase().includes(term))
          };

        case CREATE_POST_SUCCESS:
          console.log("in reducer", action.payload);

      default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

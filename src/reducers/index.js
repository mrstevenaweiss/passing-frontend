import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SELECT_POST,
  SEARCH_POSTS
} from '../constants'

const initialState = {
  posts: [],
  loading: false,
  error: null,
  selectedPost: null,
  value: '',
  filteredPosts: []
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
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
          console.log("in reducer", action.payload.searchTerm);
          return {
            ...state,
            filteredPosts: state.posts.filter(post => post.headline.includes(action.payload.searchTerm) || post.encounter.includes(action.payload.searchTerm))
          };

          // return{ ...state, posts: state.posts.filter(post => post.includes(state.value))}

      default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}


// import { ADD_REMINDER, FETCH_POSTS, SELECT_POST } from '../constants'
//
// // const initialState = {
// //   posts: [],
// //   selectedPost: {}
// // }
// //
// // const reducer = (state = initialState, action) => {
// //   switch (action.type) {
// //
// //     case 'FETCH_POSTS':
// //     return {
// //       ...state,
// //       posts: action.payload.posts
// //     }
// //
// //     case 'SELECT_POST':
// //     return {
// //       ...state,
// //       selectedPost: action.payload.post
// //     }
// //
// const reminder = (action) => {
//   let { title, text } = action
//
//   return {
//     id: Math.random(),
//     title,
//     text
//   }
// }
//
// const reminders = (state = [], action) => {
//   let reminders = null;
//
//   switch(action.type) {
//     case ADD_REMINDER:
//       reminders = [...state, reminder(action)]
//       console.log('reminders as state', reminders);
//       return reminders;
//
//     default:
//       return state;
//   }
// }
//
// export default reminders;

import React from 'react';
import { Route, Redirect, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Header from '../components/Header';
import PostsListContainer from '../containers/PostsListContainer';
import PostNewContainer from '../containers/PostNewContainer';
import PostDetailContainer from '../containers/PostDetailContainer';
import LoginContainer from '../containers/LoginContainer';
import SignupContainer from '../containers/SignupContainer';

const Container = props => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={PostsListContainer} />
        <Route exact path="/post" component={PostNewContainer} />
        <Route exact path="/posts/:postId" component={PostDetailContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        {/* <Route path='*' component={<Redirect to="/" />} /> */}
    </div>
    </Router>
  )
}


export default withRouter(Container);

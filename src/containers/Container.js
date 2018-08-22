import React from 'react';
import { Route, Redirect, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from '../components/Header';
import PostsListContainer from '../containers/PostsListContainer';
import PostNewContainer from '../containers/PostNewContainer';
import PostDetailContainer from '../containers/PostDetailContainer';
import LoginContainer from '../containers/LoginContainer';
import SignupContainer from '../containers/SignupContainer';
import Logout from '../components/Logout';

class Container extends React.Component {

  render() {
  console.log('current user in container', this.props.currentUser);
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={PostsListContainer} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/posts/:postId" component={PostDetailContainer} />
        <Route exact path="/post" render={ () => {
          return (this.props.currentUser ? <PostNewContainer />
        : <Redirect to="/login" />)
        }} />

        <Route path="/login" render={() => {
            return (this.props.currentUser ? <Redirect to="/" />
          : <LoginContainer  />)
        }} />

        <Route path="/signup" render={() => {
          return (this.props.currentUser ? <Redirect to="/login" />
        : <SignupContainer />)
        }} />
    </div>
    </Router>
  )}

}

const mapStateToProps = state => {
console.log('in mapStateT',state);
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(Container));

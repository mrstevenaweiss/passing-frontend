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

  state = {
    current_user: null
  }

  componentDidMount() {
    
  }

  render() {
  console.log('current user in container', this.props.currentUser);
  return (
    <Router>
      <div className="app">
        <Header current_user={this.state.current_user}/>
        <Route exact path="/" component={PostsListContainer} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/post" component={PostNewContainer} />
        <Route exact path="/posts/:postId" component={PostDetailContainer} />

        <Route path="/login" render={() => {
            return (this.props.loggedIn ? <Redirect to="/" />
          : <LoginContainer  handleUser={this.handleUser} />)
        }} />

        <Route path="/signup" render={() => {
          return (this.state.current_user ? <Redirect to="/" />
        : <SignupContainer />)
        }} />
    </div>
    </Router>
  )}

}

const mapStateToProps = state => {
console.log('in mapStateT',state);
  return {
    currentUser: state.currentUser,
    loggedIn: state.loggedIn
  }
}

export default withRouter(connect(mapStateToProps)(Container));

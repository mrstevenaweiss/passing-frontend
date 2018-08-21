import React, { Component } from 'react';
import Login from '../components/Login'
import { connect } from 'react-redux'

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-container">
        <Login handleUser={this.props.handleUser} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(LoginContainer)

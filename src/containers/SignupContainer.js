import React, { Component } from 'react';
import Signup from '../components/Signup'
import { connect } from 'react-redux'

class SignupContainer extends Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(SignupContainer)

import { withRouter } from 'react-router-dom'
import React, { Component, Fragment } from 'react';
import '../App.css'
import Container from '../containers/Container'
import { connect } from 'react-redux'
import { login } from '../actions'

class App extends Component {

  componentDidMount(){
    const email = localStorage.getItem('currentUser');
    if (email) {
      this.props.login({ email: email });
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  render(){
    return (
      <Fragment>
        <Container />
      </Fragment>
    )
  }
}

// const mapStateToProps = state => ({ selectedPost: state.selectedPost })

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch', this)
  return {
    login: (user) => { dispatch( login(user) ) }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));

import { withRouter } from 'react-router-dom'
import React, { Component, Fragment } from 'react';
import '../App.css'
import Container from '../containers/Container'
import { connect } from 'react-redux'

class App extends Component {

  render(){
    return (
      <Fragment>
        <Container />
      </Fragment>
    )
  }
}

// const mapStateToProps = state => ({ selectedPost: state.selectedPost })

export default withRouter(connect(null, null)(App));

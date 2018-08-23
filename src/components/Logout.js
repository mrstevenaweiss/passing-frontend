import React, { Component } from 'react';
import { connect } from 'react-redux'

const Logout = () => {

  return (
    <div className='logout-container'>
      <div
        className="logout">
        <strong>You have been logged out</strong>
      </div>
    </div>
    )
  }

// const mapDispatchToProps = (dispatch) => {
//   console.log('dispatch', this)
//   return {
//     login: (user) => { dispatch( login(user) ) }
//   }
// }

export default connect(null, null )(Logout)

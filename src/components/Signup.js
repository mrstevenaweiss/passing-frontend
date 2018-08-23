import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signup } from '../actions'
import { Link } from 'react-router';


class Signup extends Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //
  // clearForm = (e) => {
  //   this.setState({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     password: ""
  //   })
  // }


  handleSubmit = () => {
    // e.preventDefault()
    console.log('this is state', this.state)
    const {first_name, last_name, email, password} = this.state
    this.props.signup({first_name, last_name, email, password})
    // this.clearForm(e)
  }

  render() {

  return (
    <div className='container'>
      <br/>
      <form>
        <div className="col-12 col-lg-6 offset-lg-3"><strong>SIGNUP</strong>
          <input className="form-control my-3" type="text" name="first_name" placeholder="First Name" onChange={ (event)=>this.handleChange(event) }/>
          <input className="form-control my-3" type="text" name="last_name" placeholder="Last Name" onChange={ (event)=>this.handleChange(event) }/>
          <input className="form-control my-3" type="text" name="email" placeholder="Email" onChange={ (event)=>this.handleChange(event) }/>
          <input className="form-control my-3" type="password" name="password" placeholder="Password" onChange={ (event)=>this.handleChange(event) }/>

          <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={this.handleSubmit}
            >
              SIGN UP
            </button>
            </span>
            <br/>
        </div>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch', this)
  return {
    signup: (user) => { dispatch( signup(user) ) }
  }
}

export default connect(null, mapDispatchToProps )(Signup)

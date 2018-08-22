import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'


class Login extends Component {

  state = {
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('this is state in Login Component', this.state)
    const {email, password} = this.state
    this.props.login({email, password})
  }

  render() {
  return (
    <div className='login-container-form'>
      <br/>
      <form onSubmit={this.handleSubmit}>
        <div className="col-12 col-lg-6 offset-lg-3"><strong>LOGIN</strong>
          <input className="form-control my-3" type="text" name="email" placeholder="Email" onChange={ (event)=>this.handleChange(event) }/>
          <input className="form-control my-3" type="password" name="password" placeholder="Password" onChange={ (event)=>this.handleChange(event) }/>

          <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-primary float-right"
            >
              LOGIN
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
    login: (user) => { dispatch( login(user) ) }
  }
}

export default connect(null, mapDispatchToProps )(Login)

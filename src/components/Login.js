import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';
// import { login } from '../actions'

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
    // e.preventDefault()
    // this.props.addingPost(this.state)
    console.log('this is login state', this.state)
  }

  render() {

  return (
    <div className='container'>
      <br/>
      <form>
        <div className="col-12 col-lg-6 offset-lg-3"><strong>LOGIN</strong>
          <input className="form-control my-3" name="email" placeholder="Email" onChange={ (event)=>this.handleChange(event) }/>
          <input className="form-control my-3" type="password" name="password" placeholder="Password" onChange={ (event)=>this.handleChange(event) }/>

          <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={this.handleSubmit}
            >
              Login
            </button>
            </span>
            <br/>
        </div>
      </form>
    </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addingPost: (newPost) => { dispatch(addPost(newPost)) }
//   }
// }

export default connect(null, null)(Login)

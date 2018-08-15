import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions'

class PostNew extends Component {

  state = {
    first_name: "",
    headline: "",
    email: "",
    where: "",
    encounter: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addingPost(this.state)
  }

  render() {
  // const {handleSubmit, submitting, newPost} = this.props;
  return (
    <div className='container'>
      <br/>
      <form>
        <div className="col-12 col-lg-6 offset-lg-3"><strong>NEW</strong>
          <input className="form-control my-3" name="headline" placeholder="Headline" onChange={ (event) => this.handleChange(event) } />
          <input className="form-control my-3" name="first_name" placeholder="First Name" onChange={ (event) => this.handleChange(event)} />
          <input className="form-control my-3" name="email" placeholder="Email" onChange={ (event)=>this.handleChange(event) }/>
          <input className="form-control my-3" name="where" placeholder="Where" onChange={ (event)=>this.handleChange(event) }/>
          <textarea className="form-control my-6" name="encounter" placeholder="Encounter" onChange={ (event) => this.handleChange(event) }>
            </textarea>
          <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={this.handleSubmit}>
            >
              Submit
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
  return {
    addingPost: (newPost) => { dispatch(addPost(newPost)) }
  }
}

export default connect(null, mapDispatchToProps)(PostNew)

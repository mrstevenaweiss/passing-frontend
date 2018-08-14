import React, { Component } from 'react';
import { search } from '../actions'

import { connect } from 'react-redux'

class Search extends Component {

  onInputChange = (event) => {
  // this.setState({ init: event.target.value })
    // console.log(event.target.value)
    this.props.filterPosts(event.target.value)
}

  render() {
    // const filterText = this.props.filterText;
    return (
    <div className="Search">
      <form>
       <input
         type="text"
         placeholder="Search..."
         className="form-control"
         onChange={this.onInputChange}
         // value="{this.state.init}"
       />
     </form>
     <br/>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterPosts: (searchTerm) => { dispatch(search(searchTerm)) }
  }
}

export default connect(null, mapDispatchToProps)(Search);

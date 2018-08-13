import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
    <div className="Search">
      <form>
       <input
         type="text"
         placeholder="Search..."
         value="" />
       <button type="button" className="btn btn-success">FIND'EM</button>
     </form>
    </div>
    );
  }
}

export default Search;

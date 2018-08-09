import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <ul class="header-nav">
        <li><a href="/">POST</a></li>
        <li><a href="#">LOGIN</a></li>
        <li><a href="#">FEED</a></li>
        <li><a href="#">SEARCH</a></li>
      </ul>
    );
  }
}

export default Navbar;

import React, { Component } from 'react';
import Navbar from '../components/Navbar'

class NavContainer extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav>
          <Navbar />
        </nav>
          <a href="/" class="header-logo">PASSING</a>
      </div>
    );
  }
}

export default NavContainer;

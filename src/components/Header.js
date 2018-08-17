import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Header extends React.Component {
  render() {
    return (
    <div>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="brand-logo nav-wrapper container">
          <NavLink className="logo-nav" to="/"><span className="uni-logo">&#9023;</span><strong>PASSING</strong></NavLink>

          <ul className="right hide-on-med-and-down">
            <li><NavLink className="post-nav" to="/post">POST</NavLink></li>
            <li><NavLink  className="login-nav" to="/login">LOGIN</NavLink></li>
            <li><NavLink className="signup-nav" to="/signup">SIGNUP</NavLink></li>
          </ul>

        </div>
      </nav>
    </div>
    );
  }
}

export default Header;

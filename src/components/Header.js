import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Header extends React.Component {
  render() {
    return (
    <div>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="brand-logo nav-wrapper container"><NavLink to="/">PASSING</NavLink>

          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/post">POST</NavLink></li>
            <li><NavLink to="/login">LOGIN</NavLink></li>
          </ul>

        </div>
      </nav>
    </div>
    );
  }
}

export default Header;

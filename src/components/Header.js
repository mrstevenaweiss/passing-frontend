import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

class Header extends React.Component {
  render() {
    return (
    <div>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="" className="brand-logo">PASSING</a>

          <ul className="right hide-on-med-and-down">
            <li><a href="../containers/PostNewContainer">POST</a></li>
            <li><a href="">LOGIN</a></li>
          </ul>

        </div>
      </nav>
    </div>
    );
  }
}

export default Header;

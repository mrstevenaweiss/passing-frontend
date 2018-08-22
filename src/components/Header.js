import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import '../App.css'
import { logout } from '../actions'


class Header extends React.Component {

  logout = () => {
    localStorage.removeItem('currentUser');
    this.props.userLogout();
  }

  render() {
    console.log(this.props)
    return (
    <div>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="brand-logo nav-wrapper container">
          <NavLink className="logo-nav" to="/"><span className="uni-logo">&#9023;</span><strong>PASSING</strong></NavLink>

          <ul className="right hide-on-med-and-down">
            {this.props.currentUser ?
            (
              <Fragment>
                <li><NavLink className="post-nav" to="/post">POST</NavLink></li>
                <li><NavLink  className="login-nav" to="/">{this.props.currentUser.first_name} </NavLink></li>
                <li><NavLink className="logout-nav" to="/logout" onClick={this.logout}>LOGOUT</NavLink></li>
              </Fragment>
            )
          :
            (<Fragment>
              <li><NavLink className="post-nav" to="/post">POST</NavLink></li>
              <li><NavLink  className="login-nav" to="/login">LOGIN</NavLink></li>
              <li><NavLink className="signup-nav" to="/signup">SIGNUP</NavLink></li>
            </Fragment>)
            }
            </ul>

        </div>
      </nav>
    </div>
    );
  }
}

const mapStateToProps = state => {
console.log('in mapStateT',state);
  return {
    currentUser: state.currentUser
  }
}
// login: (user) => { dispatch( login(user) ) }
// const logOut =

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => { dispatch( logout() ) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

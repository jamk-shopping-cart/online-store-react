import React, { Component } from 'react';
import { Link } from './Router';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light">
          <Link to="registration" className="navbar-brand text-warning">
            <i className="fas fa-user" />
          </Link>
          <Link to="/" className="navbar-brand text-warning">
            ShoeFlex
          </Link>
          <Link to="collection" className="navbar-brand text-warning">
            <i className="fas fa-shopping-cart" />
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;

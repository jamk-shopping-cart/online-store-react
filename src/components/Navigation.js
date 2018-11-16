import React, { Component } from 'react';
import { Link } from './Router';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <Link to="reg" className="navbar-brand text-warning">
            <i className="fas fa-user" />
          </Link>
          <Link to="/" className="navbar-brand text-warning">
            ShoeFlex
          </Link>
          <Link to="cart" className="navbar-brand text-warning">
            <i className="fas fa-shopping-cart" />
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navigation;

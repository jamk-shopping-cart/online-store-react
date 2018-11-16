import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <a href="#" className="navbar-brand text-warning">
            <i class="fas fa-user" />
          </a>
          <a href="#" className="navbar-brand text-warning">
            ShoeFlex
          </a>
          <a href="#" className="navbar-brand text-warning">
            <i className="fas fa-shopping-cart" />
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;

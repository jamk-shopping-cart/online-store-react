import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info">
          <a href="#" className="navbar-brand text-warning">
            ShoeFlex
          </a>
          <a href="##" className="navbar-brand text-warning">
            Some image
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;

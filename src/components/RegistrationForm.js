import React, { Component } from 'react';
import { Link } from './Router';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input id="username" type="text" placeholder="Username" />
          <input id="password" type="text" placeholder="Password" />
          <br />
          <br />
          <Link to="nav" id="link">
            to nav
          </Link>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

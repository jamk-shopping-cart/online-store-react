import React, { Component } from 'react';
import { Link } from './Router';
import Navigation from './Navigation';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="left10 top5">
          <Link to="signin">
            <i className="fas fa-2x fa-arrow-left grey" />
          </Link>
        </div>
        <p className="em2">Registration</p>
        <form id="regForm">
          <input id="email" type="email" placeholder="Email" autoFocus required />
          <input id="password" type="password" placeholder="Password" required />
          <input id="confirm_password" type="password" placeholder="Confirm password" required />
          <input id="name" type="text" placeholder="First Name" required />
          <input id="surname" type="text" placeholder="Last Name" required />
          <input id="phone" type="tel" placeholder="Phone" required />
          <input id="address" type="text" placeholder="Address" required />
          <input id="post" type="text" placeholder="Post" required />
          <label>
            <input id="confirm" type="checkbox" required /> I accept the privacy policy
          </label>
          <input type="submit" value="Send" />
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;

import React, { Component } from 'react';
import Navigation from './Navigation';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="left10 top5" />
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
          <button type="button" className="btn btn-primary col-8">
            Send
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;

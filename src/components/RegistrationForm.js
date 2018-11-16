import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from './Router';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <form>
          <input id="email" type="email" placeholder="Email" autofocus required />
          <input id="password" type="password" placeholder="Password" required />
          <input id="password" type="password" placeholder="Confirm password" required />
          <input id="name" type="text" placeholder="First Name" required />
          <input id="surname" type="text" placeholder="Last Name" required />
          <input id="phone" type="tel" placeholder="Phone" required />
          <input id="address" type="text" placeholder="Address" required />
          <input id="post" type="text" placeholder="Post" required />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

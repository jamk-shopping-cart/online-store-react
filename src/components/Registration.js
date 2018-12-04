import React, { Component } from 'react';
import { Link } from './Router';

class Registration extends Component {
  render() {
    return (
      <div className="wrap container-fluid d-flex h-100">
        <div className="align-self-center font-light top em3">
          <Link to="collection">ShoeFlex</Link>
        </div>
        <div className="align-self-center width80">
          <form>
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
          </form>
          <Link to="signin">
            <p className="center em15">Create an account</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Registration;

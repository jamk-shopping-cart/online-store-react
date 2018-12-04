import React, { Component } from 'react';
import { Link } from './Router';

class Registration extends Component {
  render() {
    return (
      <div className="wrap container-fluid d-flex h-100">
        <div className="row w-100 ml-auto mr-auto">
          <div className="title col-xs-12 col-sm12 col-md-12 col-lg-12 top-title align-self-start text-center">
            <Link to="collection">ShoeFlex</Link>
          </div>
          <div className="form col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-center">
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
                <input id="confirm" type="checkbox" required />
                <span>I accept the privacy policy</span>
              </label>
            </form>
          </div>
          <div className="subtitle col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-center">
            <Link to="signin">
              <p>Create an account</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;

import React, { Component } from 'react';
import { Link } from './Router';

class SignIn extends Component {
  render() {
    return (
      <div className="wrap container-fluid d-flex h-100">
        <div className="title top-title align-self-center em3">
          <Link to="collection">ShoeFlex</Link>
        </div>
        <div className="title align-self-center width80">
          <form id="signForm">
            <input id="username" type="text" placeholder="USERNAME" autoFocus required />
            <input id="password" type="password" placeholder="PASSWORD" required />
          </form>
          <p className="em2 font400">Log In</p>
        </div>
        <div className="subtitle align-self-center">
          <Link to="registration">
            <p className="em15 text-muted">Create an account</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;

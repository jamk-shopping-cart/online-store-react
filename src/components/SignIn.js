import React, { Component } from 'react';
import { Link } from './Router';

class SignIn extends Component {
  render() {
    return (
      <div className="wrap container-fluid d-flex h-100 position-fixed">
        <div className="row w-100 ml-auto mr-auto">
          <div className="title col-xs-12 col-sm12 col-md-12 col-lg-12 top-title align-self-start text-center">
            <Link to="collection">ShoeFlex</Link>
          </div>
          <div className="form col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-center">
            <form>
              <input
                id="username"
                className="w-100 d-block mb-2 pl-3 rounded border-0"
                type="text"
                placeholder="USERNAME"
                autoFocus
                required
              />
              <input
                id="password"
                className="w-100 d-block pl-3 rounded border-0"
                type="password"
                placeholder="PASSWORD"
                required
              />
            </form>
            <p className="login font-bold mt-4">Log In</p>
          </div>
          <div className="subtitle col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-center">
            <Link to="registration">
              <p className="text-muted">Create an account</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

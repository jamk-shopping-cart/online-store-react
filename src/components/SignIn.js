import React, { Component } from 'react';
import { Link } from './Router';
import './SignIn.css';

class StartPage extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="top em3">
          <Link to="collection">ShoeFlex</Link>
        </div>
        <div className="center">
          <form id="signForm">
            <input id="si_username" type="text" placeholder="USERNAME" autoFocus required />
            <input id="si_password" type="password" placeholder="PASSWORD" required />
            {/* need to check this inputfield */}
          </form>
          <p className="em2 font400">Log In</p>
        </div>
        <div className="bottom">
          <Link to="registration">
            <p className="em15 text-muted">Create an account</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default StartPage;

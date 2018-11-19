import React, { Component } from 'react';
import { Link } from './Router';
import './StartPage.css';

class StartPage extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="center font100">
          <p className="em3 animated fadeIn delay-0.5s">ShoeFlex</p>
        </div>
        <div className="bottom font400 animated fadeIn delay-1s">
          <p className="em15">View Our Collection 2018</p>
          <Link to="collection">
            <i className="fas fa fa-chevron-down em2" />
          </Link>
        </div>
      </div>
    );
  }
}

export default StartPage;

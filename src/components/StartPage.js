import React, { Component } from 'react';
import { Link } from './Router';

class StartPage extends Component {
  render() {
    return (
      <div className="wrap container-fluid d-flex h-100">
        <div className="title align-middle align-self-center font-light">
          <p className="em3 animated fadeIn delay-0.5s">ShoeFlex</p>
        </div>
        <div className="subtitle align-self-center font-bold animated fadeIn delay-1s">
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

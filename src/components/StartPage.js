import React, { Component } from 'react';
import { Link } from './Router';

class StartPage extends Component {
  render() {
    return (
      <div className="container-fluid d-flex h-100 wrap">
        <div className="row w-100 ml-auto mr-auto">
          <div className="title col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-end font-light">
            <p className="em3 animated fadeIn delay-0.5s">ShoeFlex</p>
          </div>
          <div className="subtitle col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-center text-center font-bold animated fadeIn delay-1s">
            <p className="em15">View Our Collection 2018</p>
            <Link to="collection">
              <i className="fas fa fa-chevron-down em2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;

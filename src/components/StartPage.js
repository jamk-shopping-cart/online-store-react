import React, { Component } from 'react';
import { Link } from './Router';

class StartPage extends Component {
  render() {
    return (
      <div className="wrap container-fluid d-flex h-100 position-fixed">
        <div className="row w-100 ml-auto mr-auto">
          <div className="title col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-end font-light">
            <p className="animated fadeIn delay-0.5s">ShoeFlex</p>
          </div>
          <div className="subtitle col-xs-12 col-sm12 col-md-12 col-lg-12 align-self-center text-center font-bold animated fadeIn delay-1s">
            <p>View Our Collection 2018</p>
            <Link to="collection">
              <i className="fas fa fa-chevron-down" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;

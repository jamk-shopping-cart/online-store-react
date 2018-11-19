import React, { Component } from 'react';
import { Link } from './Router';
import './StartPage.css';

class StartPage extends Component {
  render() {
    return (
      <div id="wrap">
        <div id="center">ShoeFlex</div>
        <div id="bottom">
          <p>View Our Collection 2018</p>
          <Link to="collection">
            <i className="fas fa fa-chevron-down" />
          </Link>
        </div>
      </div>
    );
  }
}

export default StartPage;

import React, { Component } from 'react';
import './StartPage.css';

class StartPage extends Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="center">ShoeFlex</div>
          <div id="bottom">View Our Collection 2018</div>
          <a href="#" id="link">
            <i className="fas fa-2x fa-chevron-down" />
          </a>
        </div>
      </div>
    );
  }
}

export default StartPage;

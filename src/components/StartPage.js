import React, { Component } from 'react';
import './StartPage.css';

class StartPage extends Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="center">ShoeFlex</div>
          <div id="bottom">View Our Collection 2018</div>
          <button id="button">
            <i class="fas fa-2x fa-chevron-down" />
          </button>
        </div>
      </div>
    );
  }
}

export default StartPage;

import React, { Component } from 'react';
import './StartPage.css';

class StartPage extends Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="center">Store</div>
        </div>
        <div id="bottom">View Our Collection 2018</div>
        <button id="button"><i class="fas fa-angle-down"></i></button>
      </div>
    );
  }
}

export default StartPage;

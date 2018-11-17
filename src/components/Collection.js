import React, { Component } from 'react';
import Navigation from './Navigation';
import './Collection.css';

class Collection extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div id="collection">
          <div id="name">2018 Collection</div>
          <div id="images" />
        </div>
      </div>
    );
  }
}

export default Collection;

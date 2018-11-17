import React, { Component } from 'react';
import Navigation from './Navigation';
import ShoesData from './ShoesData';
import './Collection.css';

class Collection extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div id="collection">
          <div id="name">2018 Collection</div>
          <ShoesData />
        </div>
      </div>
    );
  }
}

export default Collection;

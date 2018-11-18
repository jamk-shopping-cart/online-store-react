import React, { Component } from 'react';
import Navigation from './Navigation';
import ShoesData from './ShoesData';
import './Collection.css';

class Collection extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div id="collection">
          <div id="collectionHeader">2018 Collection</div>
          <ShoesData />
        </div>
      </React.Fragment>
    );
  }
}

export default Collection;

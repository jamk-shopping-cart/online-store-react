import React, { Component } from 'react';
import Navigation from './Navigation';
import ShoesData from './ShoesData';
import './Collection.css';

class Collection extends Component {
  render() {
    console.log('Collection: this.props.callback' + typeof this.props.callback, this.props);
    return (
      <React.Fragment>
        <Navigation />
        <div id="collection">
          <div id="collectionHeader" className="animated pulse">
            2018 Collection
          </div>
          <ShoesData callback={this.props.callback} />
        </div>
      </React.Fragment>
    );
  }
}

export default Collection;

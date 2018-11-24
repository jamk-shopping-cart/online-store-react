import React, { Component } from 'react';
import Navigation from './Navigation';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation count={this.props.count} />
        <div />
      </React.Fragment>
    );
  }
}

export default ShoppingCart;

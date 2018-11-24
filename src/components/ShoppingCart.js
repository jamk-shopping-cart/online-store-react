import React, { Component } from 'react';
import Navigation from './Navigation';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    console.log('ShoppingCart: this.props.item:', this.props.item, this.props);
    console.log('ShoppingCart: this.props.count:', this.props.count);
    console.log('ShoppingCart: this.props.cart:', this.props.cart);

    return (
      <React.Fragment>
        <Navigation count={this.props.count} />
        <div id="collection">
          <div className="em2 margin-top">Shopping Cart</div>
          <div className="animated fadeIn delay-0.5s">[this.props.cart]</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;

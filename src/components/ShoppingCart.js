import React, { Component } from 'react';
import Navigation from './Navigation';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    console.log('ShoppingCart: this.props.cart:', this.props.cart);

    return (
      <React.Fragment>
        <Navigation count={this.props.count} />
        <div id="collection">
          <div className="em2 margin-top">Shopping Cart</div>
          <div className="animated fadeIn delay-0.5s">
            {/* this is wrong: */}
            {/* {Object.keys(this.props.cart).map(index => (
              <div key={index}>
                {this.props.cart[index].map(item => (
                  <div key={item.id}>{item.price}</div>
                ))}
              </div>
            ))} */}
            {/* 1. this.props.cart -> object {
              1: {item: {…}, count: 1, size: 47}
              2: {item: {…}, count: 2, size: 47}
              5: {item: {…}, count: 5, size: 47}
            }
            2. Object.keys(this.props.cart) -> to array [
              1: {item: {…}, count: 1, size: 47}
              2: {item: {…}, count: 2, size: 47}
              5: {item: {…}, count: 5, size: 47}
            ]
            3. inside the array object item, how to map() this array? */}
            {Object.keys(this.props.cart).map(index => (
              <li key={index}>index={index}</li>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;

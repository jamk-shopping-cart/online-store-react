import React, { Component } from 'react';
import Navigation from './Navigation';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  render() {
    if (Object.keys(this.props.cart).length !== 0) {
      console.log('ShoppingCart: this.props.cart:', this.props.cart);
      return (
        <React.Fragment>
          <Navigation count={this.props.count} />
          <div id="collection">
            <div className="em2 margin-top">Shopping Cart:</div>
            <div className="animated fadeIn delay-0.5s">
              {Object.keys(this.props.cart).map(index => (
                <li key={index}>
                  <div className="animated fadeIn delay-1s">
                    <table>
                      <tbody>
                        <tr>
                          <td rowSpan="2">
                            <img src={this.props.cart[index].item.imgUrl} alt="shoes model" width={200} />
                          </td>
                          <td>{this.props.cart[index].item.model}</td>
                          <td>{this.props.cart[index].item.price}</td>
                        </tr>
                        <tr>
                          <td>Size {this.props.cart[index].size}</td>
                          <td>QTY {this.props.cart[index].count}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className="em2.5 margin-left margin-right margin-top">Total:</div>
          <hr />
          <div className="margin-top margin-left">Items:</div>
          <div className=" margin-top margin-left">Delivery:</div>
          <div className="margin-top col-12 text-center">
            <button type="button" className="btn btn-primary">
              Continue to Pay
            </button>
          </div>
        </React.Fragment>
      );
    } else console.log('shopping cart is empty');
    return (
      <React.Fragment>
        <Navigation count={this.props.count} />
        <div id="collection" className="margin-top">
          Shopping cart is empty now.
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;

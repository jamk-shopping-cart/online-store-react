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
      </React.Fragment>
    );
  }
}

export default ShoppingCart;

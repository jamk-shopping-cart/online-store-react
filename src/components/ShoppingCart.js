import React, { Component } from 'react';
import Navigation from './Navigation';
import './ShoppingCart.css';

class ShoppingCart extends Component {
  totalPriceItem(id) {
    return id.count * Number(id.item.price.substring(1));
  }

  totalPriceCart(cart) {
    return Object.keys(cart).reduce((acc, id) => acc + this.totalPriceItem(cart[id]), 0);
  }

  toDelivery() {
    const delivery = 10;
    return delivery;
  }

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
          <div className="em2.5 margin-left margin-right margin-top animated fadeIn delay-1s">
            Total: €{this.totalPriceCart(this.props.cart) + this.toDelivery()}
          </div>
          <hr />
          <div className="margin-top margin-left animated fadeIn delay-1s">
            Items: €{this.totalPriceCart(this.props.cart)}
            {/* {Object.keys(this.props.cart).map(index => (
              <div key={index}>
                {this.props.cart[index].count * Number(this.props.cart[index].item.price.substring(1))}
                {this.totalPriceItem(this.props.cart[index])}
              </div>
            ))} */}
          </div>
          <div className="margin-top margin-left animated fadeIn delay-1s">
            Delivery:
            <span> €10</span>
          </div>
          <div className="margin-top col-12 text-center animated fadeIn delay-2s">
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

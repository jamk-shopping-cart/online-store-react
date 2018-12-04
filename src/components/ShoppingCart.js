import React, { Component } from 'react';
import Navigation from './Navigation';

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
      // console.log('ShoppingCart: this.props.cart:', this.props.cart);
      return (
        <React.Fragment>
          <Navigation count={this.props.count} />
          <div id="collection">
            <div className="em2 margin-top">Shopping Cart:</div>
            <div className="animated fadeIn delay-0.5s">
              {Object.keys(this.props.cart).map(index => (
                <li key={index}>
                  <div className="animated fadeIn delay-0.5s border border-dark rounded pr-2 py-2 mt-3">
                    <table>
                      <tbody>
                        <tr>
                          <td rowSpan="2">
                            <img className="mr-3" src={this.props.cart[index].item.imgUrl} alt="shoes model" width={120} />
                          </td>
                          <td className="pr-3">{this.props.cart[index].item.model}</td>
                          <td className="pr-2">{this.props.cart[index].item.price}</td>
                          <td><i className="far fa-times-circle fa-2x float-right"></i></td>
                        </tr>
                        <tr>
                          <td className="pr-3">Size: {this.props.cart[index].size}</td>
                          <td className="pr-2">QTY: {this.props.cart[index].count}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className="em15 mx-5 mt-5 animated fadeIn delay-0.5s">
            Total: €{this.totalPriceCart(this.props.cart) + this.toDelivery()}
          </div>
          <hr />
          <div className="mt-3 ml-5 animated fadeIn delay-0.5s">
            Items: €{this.totalPriceCart(this.props.cart)}
            {/* {Object.keys(this.props.cart).map(index => (
              <div key={index}>
                {this.props.cart[index].count * Number(this.props.cart[index].item.price.substring(1))}
                {this.totalPriceItem(this.props.cart[index])}
              </div>
            ))} */}
          </div>
          <div className="pt-3 ml-5 animated fadeIn delay-0.5s">
            Delivery:
            <span> €10</span>
          </div>
          <div className="mt-5 col-12 text-center animated fadeIn delay-1s">
            <button type="button" className="btn blueBG orangeText">
              Continue to Pay
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      // console.log('shopping cart is empty');
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
}

export default ShoppingCart;

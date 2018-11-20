import React, { Component } from 'react';
import Navigation from './Navigation';
import './Product.css';

class Product extends Component {
  render() {
    console.log('Product: this.props.item:', this.props.item, this.props);
    if (!this.props.item) {
      return <div>Please select an item from the list</div>;
    } else {
      return (
        <React.Fragment>
          <Navigation />
          <div>
            <img src={this.props.item.imgUrl} alt="shoes model" width={300} />
            {this.props.item.model}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Product;

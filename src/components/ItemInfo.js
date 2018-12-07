import React, { Component } from 'react';
import { Link } from './Router';
import Navigation from './Navigation';
import DropList from './DropList';

class ItemInfo extends Component {
  handleClick() {
    // console.log(`handleClick this.size=${this.size}`);
    this.props.callback(this.props.item, this.size);
  }

  setSize(size) {
    this.size = size;
  }

  render() {
    // console.log('ItemInfo: this.props.item:', this.props.item, this.props);
    if (!this.props.item) {
      return (
        <React.Fragment>
          <Navigation />
          <div className="container-full text-center top">
            <Link to="collection">
              <i className="fas fa-2x fa-arrow-left" />
            </Link>
            <div className="mt-2">Please select an Item from the Collection</div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Navigation count={this.props.count} />
          <div className="container-full top">
            <div id="collection">
              <div className="model text-center">{this.props.item.model}</div>
              <div className="animated fadeIn delay-0.5s text-center">
                <img src={this.props.item.imgUrl} alt="shoes model" width={300} />
              </div>
            </div>
            <div className="row ml-2">
              <span className="model">{this.props.item.price}</span>
              <DropList setSize={this.setSize.bind(this)} />
              <i className="fas fa-2x fa-cart-plus" onClick={this.handleClick.bind(this)} />
            </div>
            <div className="mt-3 mx-5">
              <div>
                <p className="feature text-left mb-0">Product information:</p>
              </div>
              <div className="text-justify">{this.props.item.description}</div>
              <div>
                <span className="feature">Color: </span>
                <span className="description">{this.props.item.color}</span>
              </div>
              <div>
                <span className="feature">Material: </span>
                <span className="description">{this.props.item.material}</span>
              </div>
              <div>
                <span className="feature">Closure method: </span>
                <span className="description">{this.props.item.closure_method}</span>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ItemInfo;

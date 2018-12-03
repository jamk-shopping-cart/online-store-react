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
          <div className="left10 top5">
            <Link to="collection">
              <i className="fas fa-2x fa-arrow-left grey" />
            </Link>
            <div className="margin-top">Please select an Item from the Collection</div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Navigation count={this.props.count} />
          <div className="left10 top5" />
          <div id="collection">
            <div className="em2">{this.props.item.model}</div>
            <div className="animated fadeIn delay-0.5s">
              <img src={this.props.item.imgUrl} alt="shoes model" width={300} />
            </div>
          </div>
          <div className="row">
            <span className="inline em25 margin-left-price">{this.props.item.price}</span>
            <DropList setSize={this.setSize.bind(this)} />
            <i className="fas fa-2x fa-cart-plus" onClick={this.handleClick.bind(this)} />
          </div>
          <div className="margin-top margin-left">
            <b>Product information:</b>
          </div>
          <div className="margin-left margin-right justify">{this.props.item.description}</div>
          <div className="margin-top margin-left">
            <b>Color:</b> <span className="em12">{this.props.item.color}</span>
          </div>
          <div className="margin-left">
            <b>Material:</b> <span className="em12">{this.props.item.material}</span>
          </div>
          <div className="margin-left">
            <b>Closure method:</b> <span className="em12">{this.props.item.closure_method}</span>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ItemInfo;

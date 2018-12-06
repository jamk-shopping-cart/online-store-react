import React, { Component } from 'react';
import { Link } from './Router';
import Counter from './Counter';

class Navigation extends Component {
  render() {
    // console.log('Navigation: this.props.count:', this.props.count);
    if (!this.props.count) {
      return (
        <div className="container-full">
          <div className="row">
            <nav className="navbar navbar-light w-100">
              <div className="col-2 text-center">
                <Link to="signin" className="navbar-brand">
                  <i className="fas fa-user" />
                </Link>
              </div>
              <div className="col-8 text-center">
                <Link to="collection" className="navbar-brand">
                  <span className="header">ShoeFlex</span>
                </Link>
              </div>
              <div className="col-2 text-center">
                <Link to="cart" className="navbar-brand">
                  <i className="fas fa-shopping-cart" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-full">
          <div className="row">
            <nav className="navbar navbar-light w-100">
              <div className="col-2 text-center">
                <Link to="signin" className="navbar-brand">
                  <i className="fas fa-user" />
                </Link>
              </div>
              <div className="col-8 text-center">
                <Link to="collection" className="navbar-brand">
                  <span className="header">ShoeFlex</span>
                </Link>
              </div>
              <div className="col-2 text-center">
                <Counter count={this.props.count} />
                <Link to="cart" className="navbar-brand">
                  <i className="fas fa-shopping-cart" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      );
    }
  }
}

export default Navigation;

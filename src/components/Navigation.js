import React, { Component } from 'react';
import { Link } from './Router';
import Counter from './Counter';
import './Navigation.css';

class Navigation extends Component {
  render() {
    // console.log('Navigation: this.props.count:', this.props.count);
    if (!this.props.count) {
      return (
        <React.Fragment>
          <nav className="navbar navbar-light">
            <Link to="signin" className="navbar-brand text-warning">
              <i className="fas fa-user em2" />
            </Link>
            <Link to="collection" className="navbar-brand text-warning">
              <p className="em21">ShoeFlex</p>
            </Link>
            <div>
              <Link to="cart" className="navbar-brand text-warning">
                <i className="fas fa-shopping-cart em2" />
              </Link>
            </div>
          </nav>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav className="navbar navbar-light">
            <div>
              <Link to="signin" className="navbar-brand text-warning">
                <i className="fas fa-user em2" />
              </Link>
              <a href="/" className="hidden">
                hidden
              </a>
            </div>
            <Link to="collection" className="navbar-brand text-warning">
              <p className="em21">ShoeFlex</p>
            </Link>
            <div>
              <Counter count={this.props.count} />
              <Link to="cart" className="navbar-brand text-warning">
                <i className="fas fa-shopping-cart em2" />
              </Link>
            </div>
          </nav>
        </React.Fragment>
      );
    }
  }
}

export default Navigation;

import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    // console.log('Counter: this.props.count:', this.props.count);
    return <div className="circle">{this.props.count}</div>;
  }
}

export default Counter;

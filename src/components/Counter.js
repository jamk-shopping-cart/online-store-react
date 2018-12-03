import React, { Component } from 'react';

class Counter extends Component {
  render() {
    // console.log('Counter: this.props.count:', this.props.count);
    return <div className="circle animated zoomIn">{this.props.count}</div>;
  }
}

export default Counter;

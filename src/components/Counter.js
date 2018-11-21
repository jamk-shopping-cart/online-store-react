import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  render() {
    // const callback = this.props.callback;
    // console.log('ShoesData: typeof callback ' + typeof callback, this.props);
    // const { error, isLoaded, items } = this.state;
    return (
      <div className="circle">
        {/* {items.map((item, index) => (
          <li key={item.id}>
            <Shoes key={index} item={item} callback={callback} />
          </li>
        ))} */}
      </div>
    );
  }
}

export default Counter;

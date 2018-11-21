import React from 'react';
import './DropList.css';
import Dropdown from 'react-dropdown';

const options = ['Size', 40, 41, 42, 43, 44, 45, 46, 47];
const defaultOption = options[0];

class DropList extends React.Component {
  render() {
    return (
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
    );
  }
}

export default DropList;

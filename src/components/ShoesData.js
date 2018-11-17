import React, { Component } from 'react';

class ShoesData extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, isLoaded: false, items: [] };
  }

  componentDidMount() {
    fetch('https://5bf089690756d2001311987d.mockapi.io/shoes')
      .then(res => res.json())
      .then(
        result => {
          this.setState({ isLoaded: true, items: result.items });
        },
        error => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.model} {item.size}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default ShoesData;

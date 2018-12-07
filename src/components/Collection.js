import React, { Component } from 'react';
import Navigation from './Navigation';
import ItemList from './ItemList';

class Collection extends Component {
  render() {
    // console.log('Collection: this.props.callback' + typeof this.props.callback, this.props);
    return (
      <React.Fragment>
        <Navigation count={this.props.count} />
<<<<<<< HEAD
        <div className="container text-center top">
          <div className="animated pulse mb-2">2018 Collection</div>
=======
        <div id="collection" className="container">
          <div id="collectionHeader" className="animated pulse">
            2018 Collection
          </div>
>>>>>>> 314d477856682d2a286a098f56d9b871b10abc68
          <ItemList callback={this.props.callback} />
        </div>
      </React.Fragment>
    );
  }
}

export default Collection;

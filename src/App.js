import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'roboto-fontface';
import 'animate.css/animate.css';
import 'react-dropdown/style.css';
import React, { Component } from 'react';
import { Route } from './components/Router';
import StartPage from './components/StartPage';
import RegistrationForm from './components/RegistrationForm';
import Collection from './components/Collection';
import Product from './components/Product';
import SignIn from './components/SignIn';
import './App.css';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  constructor(props) {
    console.log('item: ' + window.localStorage.getItem('item'));
    console.log('count: ' + window.localStorage.getItem('count'));
    window.localStorage.clear();
    super(props);
    if (window.localStorage) {
      console.log('Local Storage is available');
    } else {
      window.alert('Local Storage is not available');
    }
    const count = Number(window.localStorage.getItem('count') || 0);
    const item = JSON.parse(window.localStorage.getItem('item') || 'null');
    const cart = JSON.parse(window.localStorage.getItem('cart') || '{}');
    this.setItem = this.setItem.bind(this);
    this.state = { item, count, cart };
  }

  setItem(item) {
    console.log(`app.setItem: ${item.model}`, item);
    this.setState({ item });
    window.localStorage.setItem('item', JSON.stringify(item));
  }

  increaseCount(newItem) {
    console.log(`app.increaseCount: increase`);
    const count = this.state.count + 1;
    this.setState({ count });
    if (newItem) {
      this.addItemToCart(newItem);
    }
    window.localStorage.setItem('count', count);
  }

  addItemToCart(item) {
    const cart = this.state.cart;
    const itemStored = cart[item.id] || {
      item,
      count: 0,
      size: 47
    };
    itemStored.count++;
    cart[item.id] = itemStored;
    this.setState({ cart });
    window.localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`app.addItemToCart: cart`, cart);
    // console.log(`app.addItemToCart: itemStored`, itemStored);
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/registration" component={RegistrationForm} count={this.state.count} />
        <Route
          exact
          path="/collection"
          component={Collection}
          callback={this.setItem.bind(this)}
          count={this.state.count}
        />
        <Route
          exact
          path="/product"
          component={Product}
          item={this.state.item}
          callback={this.increaseCount.bind(this)}
          count={this.state.count}
        />
        <Route
          exact
          path="/cart"
          component={ShoppingCart}
          callback={this.addItemToCart.bind(this)}
          cart={this.state.cart}
        />
      </div>
    );
  }
}

export default App;

// App <- Route (callback) <- Collection (callback) <- ShoesData (callback) <- Shoes (callback)
// App -> Route (item) -> Product (item)

// App <- Route (callback) <- Product (callback)
// App -> Route (count) -> ? Product (count) ? -> Navigation (count) -> Counter (count)

// App -> Route (cart) -> ShoppingCart (cart)

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

class App extends Component {
  constructor(props) {
    super(props);
    this.setItem = this.setItem.bind(this);
    this.state = { item: null };
  }

  setItem(item) {
    console.log(`app.setItem: ${item.model}`, item);
    this.setState({ item });
  }

  setCount(count) {
    console.log(`app.setCount: ${count}`);
    this.setState({ count });
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/registration" component={RegistrationForm} />
        <Route exact path="/collection" component={Collection} callback={this.setItem.bind(this)} />
        <Route
          exact
          path="/product"
          component={Product}
          item={this.state.item}
          callback={this.setCount.bind(this)}
          count={this.state.count}
        />
        <Route exact path="/signin" component={SignIn} />
      </div>
    );
  }
}

export default App;

// App <- Route (callback) <- Collection (callback) <- ShoesData (callback) <- Shoes (callback)
// App -> Route (item) -> Product (item)

// Product -> Navigation (count) -> Counter (count)
// App <- Route (callback) <- Product (callback)
// App -> Route (count) -> ? Product (count) ? -> Navigation (count) -> Counter (count)

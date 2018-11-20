import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'roboto-fontface';
import 'animate.css/animate.css';
import React, { Component } from 'react';
import { Route } from './components/Router';
import StartPage from './components/StartPage';
import Navigation from './components/Navigation';
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

  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/registration" component={RegistrationForm} />
        <Route exact path="/navigation" component={Navigation} />
        <Route exact path="/collection" component={Collection} callback={this.setItem.bind(this)} />
        <Route exact path="/product" component={Product} item={this.state.item} />
        <Route exact path="/signin" component={SignIn} />
      </div>
    );
  }
}
// App -> Route (callback) -> Collection (callback) -> ShoesData (callback) -> Shoes (callback)
// App -> Route (item) -> Product (item)

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'roboto-fontface';
import React, { Component } from 'react';
import { Route } from './components/Router';
import StartPage from './components/StartPage';
import Navigation from './components/Navigation';
import RegistrationForm from './components/RegistrationForm';
import Collection from './components/Collection';
import Product from './components/Product';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/registration" component={RegistrationForm} />
        <Route exact path="/navigation" component={Navigation} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/product" component={Product} />
      </div>
    );
  }
}

export default App;

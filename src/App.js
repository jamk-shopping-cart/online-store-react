import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'roboto-fontface';
import React, { Component } from 'react';
import { Route } from './components/Router';
import StartPage from './components/StartPage';
import Navigation from './components/Navigation';
import RegistrationForm from './components/RegistrationForm';
import Collection from './components/Collection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/reg" component={RegistrationForm} />
        <Route exact path="/nav" component={Navigation} />
        <Route exact path="/col" component={Collection} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from './components/Router';
import StartPage from './components/StartPage';
import Navigation from './components/Navigation';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/reg" component={RegistrationForm} />
        <Route exact path="/nav" component={Navigation} />
      </div>
    );
  }
}

export default App;

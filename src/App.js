import React, { Component } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;

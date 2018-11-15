import React, { Component } from 'react';
import './App.css';

// import Navigation from './components/Navigation';
// import RegistrationForm from './components/RegistrationForm';
import StartPage from './components/StartPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StartPage />
      </div>
    );
  }
}

export default App;

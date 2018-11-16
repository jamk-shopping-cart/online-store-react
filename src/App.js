import React, { Component } from 'react';
import { Route, Link } from './components/Router';
import StartPage from './components/StartPage';
import './App.css';

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

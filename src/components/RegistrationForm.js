import React, { Component } from 'react';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input id="username" type="text" placeholder="Username" />
          <input id="password" type="text" placeholder="Password" />
        </form>
      </div>
    );
  }
}

export default RegistrationForm;

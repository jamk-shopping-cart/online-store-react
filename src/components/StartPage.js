import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import { Link } from './Router';
import './StartPage.css';

// const Link = props => {
//   console.log(props);
//   return <a href={props.to}>{props.children}</a>;
// };

class Route extends Component {
  render() {
    console.log(this.props);
    const { component } = this.props;
    return React.createElement(component);
  }
}

class StartPage extends Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="center">ShoeFlex</div>
          <div id="bottom">View Our Collection 2018</div>
          <Link to="main" id="link">
            <i className="fas fa-2x fa-chevron-down" />
          </Link>
        </div>
        <Route exact path="/" component={RegistrationForm} />
        {/* <Route path="/about" render={() => <p>route</p>} /> */}
      </div>
    );
  }
}

export default StartPage;

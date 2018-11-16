import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
// import Navigation from './Navigation';
import { Route, Link } from './Router';
import './StartPage.css';

// const Link = props => {
//   console.log(props);
//   return <a href={props.to}>{props.children}</a>;
// };

// class Route extends Component {
//   render() {
//     console.log(this.props);
//     const { component, render } = this.props;
//     if (component) {
//       return React.createElement(component);
//     }
//     if (render) {
//       return render();
//     }
//   }
// }

class StartPage extends Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="center">ShoeFlex</div>
          <div id="bottom">View Our Collection 2018</div>
          <Link to="reg" id="link">
            <i className="fas fa-2x fa-chevron-down" />
          </Link>
        </div>
        <Route exact path="/reg" component={RegistrationForm} />
        {/* <Route exact path="/nav" component={Navigation} /> */}
        {/* <Route path="/route" render={() => <p>route</p>} /> */}
      </div>
    );
  }
}

export default StartPage;

import React, { Component } from 'react';
import './StartPage.css';

const Link = props => {
  console.log(props);
  return <a href={props.to}>{props.children}</a>;
};

class StartPage extends Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="center">ShoeFlex</div>
          <div id="bottom">View Our Collection 2018</div>
          <Link to="#" id="link">
            <i className="fas fa-2x fa-chevron-down" />
          </Link>
        </div>
      </div>
    );
  }
}

export default StartPage;

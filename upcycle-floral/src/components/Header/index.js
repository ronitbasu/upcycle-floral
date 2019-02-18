import React, { Component } from 'react';
import './style.css';
import logo from '../../static/logo.png';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} />
      </div>
    );
  }
}

export default Header;

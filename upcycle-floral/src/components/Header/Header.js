import React, { Component } from 'react';
import './Header.css';
import logo from '../../static/logo.png';

class App extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import ConfirmationBanner from '../ConfirmationBanner';
import Confirmation from '../Confirmation';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;

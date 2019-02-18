import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import ConfirmationBanner from '../ConfirmationBanner';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ConfirmationBanner />
      </div>
    );
  }
}

export default App;

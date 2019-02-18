import React, { Component } from 'react';
import './style.css';
import staticImage from '../../static/images/lily_static.jpeg';

class Confirmation extends Component {
  render() {
    return (
      <div className="confirmation">
        <h2>Your Order</h2>
        <img src={staticImage} />
        <p className="instructions">
          Lilies will be available for pickup 4/21.
        </p>
        <p className="saved">
          You saved $350.00!
        </p>
      </div>
    );
  }
}

class SeeReservation extends Component {
  render() {
    return (
      <div>&nbsp;</div>
    )
  }
}

class SearchMore extends Component {
  render() {
    return (
      <div>&nbsp;</div>
    )
  }
}

class Cancel extends Component {
  render() {
    return (
      <div>&nbsp;</div>
    )
  }
}

export default Confirmation;

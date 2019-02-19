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
          Lilies will be available for pickup 4/21 between 10:00am and 12:00pm.
        </p>
        <p className="saved">
          You saved $350.00!
        </p>
        <SeeReservation />
        <SearchMore />
        <Cancel />
      </div>
    );
  }
}

class SeeReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimize:true
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({minimize:(!this.state.minimize)});
  };
  render() {
    return (
      <div className="seereservation">
        <hr />
        <span onClick={() => {this.toggle();}}>{this.state.minimize?"▶":"▼"} See Details</span>
        <div className={this.state.minimize?"hidden":"viewing"}>
        	hellohellohello!
        </div>
      </div>
    )
  }
}

class SearchMore extends Component {
  render() {
    return (
      <div className="button searchmore">Search More Arrangements</div>
    )
  }
}

class Cancel extends Component {
  render() {
    return (
      <div className="button cancel">Cancel</div>
    )
  }
}

export default Confirmation;

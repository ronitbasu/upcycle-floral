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
          "Birthday Blooms" will be available for pickup 4/21 between 10:00am and 12:00pm.
        </p>
        <p className="saved">
          You saved $35.00!
        </p>
        <div className="helperbuttons">
          <AddToCalendar />
          <GetDirections />
        </div>
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
        <span className="expander" onClick={() => {this.toggle();}}>{this.state.minimize?"▶ Expand":"▼ Hide"} Details</span>
        <div className={this.state.minimize?"hidden":"viewing"}>
          <table>
            <tbody>
              <tr>
                <td>Number of Flowers:</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Original value:</td>
                <td>$49.99</td>
              </tr>
              <tr>
                <td>Original Date of Arrangement:</td>
                <td>2/16/2019</td>
              </tr>
            </tbody>
          </table>
          <span className="description">This bright arrangement is perfect as a great party centerpiece or to send to a loved one far away.</span>
        </div>
      </div>
    )
  }
}

class SearchMore extends Component {
  render() {
    return (
      <div className="button searchmore">Back to Search</div>
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
class AddToCalendar extends Component {
  render() {
    return (
      <button>Add to Calendar</button>
    )
  }
}
class GetDirections extends Component {
  render() {
    return (
      <button>Get Directions</button>
    )
  }
}

export default Confirmation;

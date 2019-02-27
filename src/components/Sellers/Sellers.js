import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import staticImage from '../../static/images/lily_static.jpeg';
import AddToCalendar from 'react-add-to-calendar';
import ConfirmationBanner from '../ConfirmationBanner';
import Dropzone from 'react-dropzone';

class Sellers extends Component {
  state = {
    title: "Birthday Blooms",
    description: 'This bright arrangement is perfect as a great party centerpiece or to send to a loved one far away.',
    location: '7033 N Moselle Ave, Chicago, IL 60646',
    startTime: new Date('2019-04-21T10:00:00-05:00'),
    endTime: new Date('2019-04-21T12:00:00-05:00'),
    currency: "$",
    originalValue: 35,
    purchaseValue: 0,
    originalDate: new Date('2019-04-16'),
    numberOfFlowers: 50,
  };
  render() {
    let google_link = "https://www.google.com/maps/search/?api=1&query=" + this.state.location.replace(/ /g, "+");
    let event = {
      title: `"${this.state.title}" Pickup`,
      description: `Pickup for "${this.state.title}"`,
      location: this.state.location,
      startTime: this.state.startTime.toISOString(),
      endTime: this.state.endTime.toISOString(),
    };
    return (
      <div>
        <div className="confirmation">
          <h1>Create a Listing</h1>

          <p>Upload a photo of your flowers</p>
          <input type="file" accept="image"/>

          <p className="saved">
            Please select the flower type, quantity, and potential pickup dates below
          </p>

          <form onSubmit={this.handleSubmit}>
            <label>
              Flower Type:
              <select>
                <option value="Roses">Roses</option>
                <option value="Tulips">Tulips</option>
                <option value="Dandylions">Dandylions</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <br/>
            <label>
              Quantity:
              <select>
                <option value="1-12">1-12</option>
                <option value="12-25">12-25</option>
                <option value="25-50">25-50</option>
                <option value="50+">50+</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>

          <div className="helperbuttons">
            <SubmitListing/>
            <Cancel />
          </div>
        </div>
      </div>
    );
  }
}

class SearchMore extends Component {
  render() {
    return (

      <div className="button searchmore">
        <a className="searchmore" href="/"> Back to Search</a>
      </div>
    )
  }
}

class Cancel extends Component {
  render() {
    return (
      <div className="button cancel">
        <a className="cancel" href="/">Go Back to Search</a>
      </div>
    )
  }
}
class SubmitListing extends Component {
  render() {
    return (
      <a className='getdirections'>Submit Listing</a>
    )
  }
}

export default Sellers;

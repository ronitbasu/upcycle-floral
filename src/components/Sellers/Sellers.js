import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import staticImage from '../../static/images/lily_static.jpeg';
import AddToCalendar from 'react-add-to-calendar';
import ConfirmationBanner from '../ConfirmationBanner';
import Dropzone from 'react-dropzone';
import ImageUploader from 'react-images-upload';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Sellers extends Component {

  constructor(props) {
    super(props);
     this.state = {
       title: "Birthday Blooms",
       description: 'This bright arrangement is perfect as a great party centerpiece or to send to a loved one far away.',
       location: '7033 N Moselle Ave, Chicago, IL 60646',
       currency: "$",
       originalValue: 35,
       purchaseValue: 0,
       originalDate: new Date('2019-04-16'),
       numberOfFlowers: 50,
       flowerTypes: [],
       count: 1,
       pictures: [],
       dateRange: {
        from: null,
        to: null,
       }
     };
     this.onDrop = this.onDrop.bind(this);
     this.addFlowerType = this.addFlowerType.bind(this);
     this.removeFlowerType = this.removeFlowerType.bind(this);
  }

  componentWillMount = () => {
    this.setState({flowerTypes: ['type1']});
  }

  onDrop(pictureFiles, pictureDataURLs) {
    console.log(pictureFiles);
		this.setState({
        pictures: this.state.pictures.concat(pictureFiles),
    });
  }

  addFlowerType = () => {
    let currTypes = this.state.flowerTypes;
    let currCount = this.state.count;
    let newKey = 'type' + (currCount + 1);
    this.setState({ flowerTypes : currTypes.concat([newKey]), count: currCount + 1});
  }

  removeFlowerType = (index) => {
    let currTypes = this.state.flowerTypes;
    let left = currTypes.slice(0,index);
    let right = currTypes.slice(index+1);
    this.setState({ flowerTypes: left.concat(right)});
  }

  render() {
    if (false) {
      // Seems to be code for future — Jon
      let { from: startTime, to: endTime } = this.state.dateRange;
      let google_link = "https://www.google.com/maps/search/?api=1&query=" + this.state.location.replace(/ /g, "+");
      let event = {
        title: `"${this.state.title}" Pickup`,
        description: `Pickup for "${this.state.title}"`,
        location: this.state.location,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      };
    }
    return (
      <div>
        <div className="confirmation">
          <h1>Create a Listing</h1>
          <ImageUploader
                	withIcon={true}
                	buttonText='Upload pictures of your flowers'
                	onChange={this.onDrop}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                	maxFileSize={5242880}
                  withPreview={true}
                  label='Max file size: 5mb, Accepted: .jpg | .png | .gif'
            />
          <p className="saved">
            Please select the flower type, quantity, and potential pickup dates below
          </p>

          <form onSubmit={this.handleSubmit}>
            {this.state.flowerTypes.map( (type, index) => (
              <div key={type}>
                <label>
                  Flower Type:
                  <select>
                    <option value="Roses">Roses</option>
                    <option value="Tulips">Tulips</option>
                    <option value="Dandylions">Dandylions</option>
                    <option value="Other">Other</option>
                  </select>
                </label> &emsp;
                <label>
                  Quantity:
                  <select>
                    <option value="1-12">1-12</option>
                    <option value="12-25">12-25</option>
                    <option value="25-50">25-50</option>
                    <option value="50+">50+</option>
                  </select>
                </label>
                &emsp; <span onClick={() => this.removeFlowerType(index)} className="removeFlowerType">X</span>
                <br />
              </div>
            ))}
            <p id="addFlowers" onClick={this.addFlowerType}> + Add another flower type </p>
            <p className="saved"> Add any other important information below </p>
            <textarea rows="1" cols="50" wrap="physical" name="description"></textarea>
            <br />
            <DayPicker
              onDayClick={this.handleDateSelection}
              month={this.state.startTime}
              selectedDays={[this.state.dateRange, this.state.dateRange.from]}
              disabledDays={{before: new Date()}}
            />
            <br />
          </form>

          <div className="helperbuttons">
            <SubmitListing/>
            <Cancel />
          </div>
        </div>
      </div>
    );
  }

  handleDateSelection = day => {
    let { dateRange } = this.state;
    if (!dateRange.from || (dateRange.from && dateRange.to)) {
      this.setState({ dateRange: { from: day, to: null } })
    } else {
      this.setState({
        dateRange: DateUtils.addDayToRange(day, dateRange)
      })
    }
  }
}

const FlowerTypeSelection = (index, remove) => {
  return (
    <div>
      <label>
        Flower Type:
        <select>
          <option value="Roses">Roses</option>
          <option value="Tulips">Tulips</option>
          <option value="Dandylions">Dandylions</option>
          <option value="Other">Other</option>
        </select>
      </label> &emsp;
      <label>
        Quantity:
        <select>
          <option value="1-12">1-12</option>
          <option value="12-25">12-25</option>
          <option value="25-50">25-50</option>
          <option value="50+">50+</option>
        </select>
      </label>
      &emsp; <span onClick={() => remove(index)} className="removeFlowerType">X</span>
      <br />
    </div>
)};

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

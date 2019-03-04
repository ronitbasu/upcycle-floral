import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Header/index.js';
import './style.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to={`/sellers`} className="home_link" style={{textDecoration: 'none'}}>
          Add a listing!
        </Link>
        <Filters />
        <Shelf />
        <Link to={`/confirmation`} className="home_link">
          Click here for confirmation Page!
        </Link>
        <br/>
        <p id="showBanner" onClick={()=>localStorage.clear()}> Click to make banner appear for confirmation page </p>
        <br/>
      </div>
    );
  }
}

class Filters extends Component {
  render() {
    return (
      <div className="filters">
      Filters Go Here
      </div>
    );
  }
}

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: [
        {
          title: "Birthday Blooms",
          description: 'This bright arrangement is perfect as a great party centerpiece or to send to a loved one far away.',
          location: '7033 N Moselle Ave, Chicago, IL 60646',
          startTime: new Date('2019-04-21T10:00:00-05:00'),
          endTime: new Date('2019-04-21T12:00:00-05:00'),
          originalDate: new Date('2019-04-16'),
          numberOfFlowers: 50,
          image:'lily_static.jpeg'
        }
      ]
    }
  }
  render() {
    let rows = [];
    for (let i = 0; i < this.state.catalog.length; i++) {
      // Filtering will happen here
      rows.push(
        <Listing data={this.state.catalog[i]} />
      );
    }
    
    return (
      <div className="shelf">
        {rows}
      </div>
    );
  }
}

class Listing extends Component {
  render() {
    return (
      <div className="listing">
      </div>
    );
  }
}

export default HomePage;

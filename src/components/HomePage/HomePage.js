import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Header/index.js';
import './style.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>There are no listings at this time</p>
        <Link to={`/confirmation`} className="home_link">
          Click here for confirmation Page!
        </Link>
        <br/>
        <Link to={`/sellers`} className="home_link">
          Create a Listing!
        </Link>
      </div>
    );
  }
}

export default HomePage;

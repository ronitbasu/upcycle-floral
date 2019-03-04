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
        <span id="showBanner" onClick={()=>localStorage.clear()}> Click to make banner appear for confirmation page </span>
        <br/>
        <Link to={`/sellers`} className="home_link" style={{textDecoration: 'none'}}>
          Click here to create a listing!]
        </Link>
      </div>
    );
  }
}

export default HomePage;

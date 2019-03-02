import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Header/index.js';
import './style.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>This is where listings will appear!</p>
        <Link to={`/confirmation`} style={{textDecoration: 'none'}}>
          Click here for confirmation Page!
        </Link>
        <br/>
        <span id="showBanner" onClick={()=>localStorage.clear()}> Click to make banner appear for confirmation page </span>
        <br/>
        <Link to={`/sellers`} style={{textDecoration: 'none'}}>
          Click here to create a listing!
        </Link>
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Header/index.js';
import './style.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Im the HomePage</p>
        <Link to={`/confirmation`} style={{textDecoration: 'none'}}>
          Click here for confirmation Page!
        </Link>
      </div>
    );
  }
}

export default HomePage;

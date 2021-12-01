import React from 'react';

import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
    return (
        <div id="possibility" className="possibility section__padding">

          <div className="possibility-image">
            <img src={possibilityImage} alt="possibilityImage" />
          </div>

          <div className="possibility-content">
            <h4>Request Early Access </h4>
            <h1 className="gradient__text">Possibilities are beyond your imagination</h1>
            <p>travelling for assistance</p>
            <h4>Request for Early Access</h4>
          </div>
          
        </div>
    )
}

export default Possibility

import React from 'react';
import Feature from '../../components/feature/Feature';

import './features.css';

const Features = () => {
    return (
        <div className="features section__padding" id="features">

          <div className="features-heading">
            <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="features-container">
            <Feature
              title="Lorem"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero."
            />
            <Feature
              title="Lorem"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero."
            />
            <Feature
              title="Lorem"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero."
            />
            <Feature
              title="Lorem"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero."
            />
          </div>
        </div>
    )
}

export default Features

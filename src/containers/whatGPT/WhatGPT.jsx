import React from 'react';
import Feature from '../../components/feature/Feature';

import './whatGPT.css';

const WhatGPT = () => {
    return (
        <div id="what" className="what section__margin">

          <div className="what-feature">
            <Feature 
              title="What is lorem ipsum?" 
              text="Lorem ipsum dolor sit amet."
            />
          </div>

          <div className="what-heading">
            <h1 className="gradient__text">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor.</p>
          </div>

          <div className="what-container">
            <Feature 
                title="What is lorem ipsum?" 
                text="Lorem ipsum dolor sit amet."
              />
              <Feature 
              title="What is lorem ipsum?" 
              text="Lorem ipsum dolor sit amet."
            />
            <Feature 
              title="What is lorem ipsum?" 
              text="Lorem ipsum dolor sit amet."
            />
          </div>
        </div>
    )
}

export default WhatGPT

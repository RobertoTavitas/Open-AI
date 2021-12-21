import React from 'react';
import Feature from '../../components/feature/Feature';

import './whatGPT.css';

const WhatGPT = () => {
    return (
        <div id="what" className="what section__margin">

          <div className="what-feature">
            <Feature 
              title="What is GPT-3" 
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            />
          </div>

          <div className="what-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination1</h1>
            <p>Explore The Library</p>
          </div>

          <div className="what-container">
            <Feature 
                title="Chatbots" 
                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
              />
              <Feature 
              title="Knowledgebase" 
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
            />
            <Feature 
              title="Education" 
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
            />
          </div>
        </div>
    )
}

export default WhatGPT

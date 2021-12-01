import React from 'react';

import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
      <div id="home" className="header section__padding">

        <div className="header-content">
          <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ut hic officia, odit amet quaerat expedita ab. A ducimus iste molestias reprehenderit ex deserunt accusantium consequuntur consequatur ea? Officia, ducimus!</p>

          <div className="header-content-input">
            <input type="email" name=" " id="" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>

          <div className="header-content-people">
            <img src={people} alt="people" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
        </div>

          <div className="header-image">
            <img src={ai} alt="ai" />
          </div>

      </div>
    )
}

export default Header

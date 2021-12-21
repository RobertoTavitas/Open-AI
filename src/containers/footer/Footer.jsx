import React from 'react';

import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="footer section__padding">

          <div className="footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
          </div>

          <div className="footer-btn">
            <p>Request Early Access</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-logo">
              <img src={gpt3Logo} alt="logo" />
              <p>this is the adress</p>
            </div>

            <div className="footer-links-div">
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>

            <div className="footer-links-div">
              <h4>Company</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>

            <div className="footer-links-div">
              <h4>Get in Touch</h4>
              <p>Adress</p>
              <p>phone number</p>
              <p>mail</p>
            </div>

          </div>

          <div className="footer-copyright">
            <p>2021 Roberto Tavitas. All rights reserved.</p>
          </div>

        </div>
    )
}

export default Footer

import React from 'react';

import './style.css'

import twitter from '../../assets/icon-twitter.png'
import facebook from '../../assets/icon-facebook.png'

function Footer() {
  return (
    <footer>
      <div className="companyName">
        <h3>chr.dc</h3>
      </div>
      <div className="socialMedia">
        <img src={twitter} alt="Twitter Logo" className="iconTwitter"></img>
        <img src={facebook} alt="Facebook Logo" className="iconFacebook"></img>
      </div>
    </footer>
  );
}

export default Footer;
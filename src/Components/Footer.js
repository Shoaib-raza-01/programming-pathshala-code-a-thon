import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footer-left">
          <div className="patients">PATIENTS</div>
          <div className = 'onHover'>Book a Test</div>
          <div className = 'onHover'>Nearest Centre</div>
          <div className = 'onHover'>Download Report</div>
          <div className = 'onHover'>Promotions & Discounts</div>
          <div className = 'onHover'>Special Programs</div>
        </div>

        <div className="footer-center">
          <div className="patients">PATIENTS</div>
          <div className = 'onHover'>Book the Test</div>
          <div className = 'onHover'>Nearest Centre</div>
          <div className = 'onHover'>Download Report</div>
          <div className = 'onHover'>Promotions & Discounts</div>
          <div className = 'onHover'>Special Programs</div>
        </div>
       
        <div className="footer-right">
          <div className="aboutus">ABOUT US</div>
          <div className = 'onHover'>Our Journey</div>
          <div className = 'onHover'>Vision, Mission & Values</div>
          <div className = 'onHover'>Our Team</div>
          <div className = 'onHover'>Our Network</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

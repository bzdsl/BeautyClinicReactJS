/** @format */

import React from "react";
import Logo from "../Assets/Main_Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Background from "../Assets/img/bg-footer1.png";
const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <img src={Background} className='background-footer' alt='' />

      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <img src={Logo} alt='' />
        </div>
        <div className='footer-text'>
          <p>
            <b>Beautice</b> is a Beauty Clinic WordPress Theme.
          </p>
          <p>
            <i>Baker Street 101, NY, United States.</i>
          </p>
          <p>
            <i>+521 569 8966.</i>
            <i>mail@company.com</i>
          </p>
        </div>
        <div className='footer-icons'>
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Gallery</span>
          <span>Team</span>
          <span>Work</span>
        </div>

        <div className='footer-section-columns'>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

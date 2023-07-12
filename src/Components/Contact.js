/** @format */

import React from "react";
import ContactBackground from "../Assets/img/background-contact.png";
import BannerImage from "../Assets/img/Contact_Animations.png";

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
      <div className='contact-background'>
        <img src={ContactBackground} alt='' />
      </div>

      <div className=''>
        <img src={BannerImage} alt='' />
      </div>
      <div className='contact-content'>
        <h4 className='primary-subheading'>Contact Us</h4>
        <h1 className='primary-heading'>
          Send your inquiry to our expert team
        </h1>

        <div className='contact-form-container'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Subject' />
          <input type='text' placeholder='Your inquiry here' />
          <button className='secondary-button'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

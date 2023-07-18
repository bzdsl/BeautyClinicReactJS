/** @format */

import React from "react";
import "../../index.css";
import "./Contact.css";
import ContactBackground from "../../Assets/img/background-contact.png";
import BannerImage from "../../Assets/img/Contact_Animations.png";

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
      <div className='contact-background'>
        <img src={ContactBackground} alt='' />
      </div>
      <div className='contact-container'>
        <div className='contact-image-section'>
          <img src={BannerImage} alt='' />
        </div>
        <div className='contact-content'>
          <div className='content-block'>
            <h4 className='primary-subheading'>Contact Us</h4>
            <h1 className='primary-heading'>
              Send your inquiry to our expert team
            </h1>
            <form action='#!'>
              <div className='name'>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' class='last-name' />
              </div>
              <div className='email'>
                <input type='text' placeholder='Email address' />
              </div>
              <div className='email'>
                <input type='text' placeholder='Subject email' />
              </div>
              <div className='request'>
                <textarea
                  rows='4'
                  cols='65s'
                  name='comment'
                  form='usrform'
                  placeholder='Your inquiry here'></textarea>
              </div>
              <div className=''>
                <button class='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'>
                  Button
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/** @format */

import React from "react";
import "../../index.css";
import "./Contact.css";
import Button from "@mui/material/Button";
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
            <form className='' action='#!'>
              <div className='name'>
                <input type='text' placeholder='First name' />
                <input
                  type='text'
                  placeholder='Last name'
                  className='last-name'
                />
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
              <div className='button-container'>
                <Button
                  variant='contained'
                  sx={{
                    width: "208px",
                    height: "58px",
                    backgroundColor: "#ff64ae",
                    color: "#fff",
                    padding: "0.5rem 1.75rem",
                    fontSize: "16px",
                    borderRadius: "5rem",
                    fontWeight: "600",
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: "#f253a0",
                    },
                  }}>
                  Send Messages
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

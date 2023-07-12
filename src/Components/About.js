/** @format */

import React from "react";

import AboutBackground1 from "../Assets/img/background-service.png";

import AboutBackgroundImage1 from "../Assets/img/about.png";

import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
        <img src={AboutBackground1} alt='' />
      </div>
      <div className='about-content'>
        <div className='about-section-text-container'>
          <p className='primary-subheading'>About</p>
          <h1 className='primary-heading'>We are the best beauty clinic</h1>
          <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat. Id dui erat sed quam tellus in purus.
            Pellentesque congue fringilla cras tellus enim.
          </p>
          <div className='about-buttons-container'>
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'>
              <span>
                {" "}
                <BsFillPlayCircleFill />
              </span>{" "}
              Watch Video
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className='about-section-image-container'>
          <img src={AboutBackgroundImage1} alt='' />
        </div>
      </div>
    </div>
  );
};

export default About;

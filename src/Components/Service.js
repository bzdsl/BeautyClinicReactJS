/** @format */

import React from "react";

import ProfilePic1 from "../Assets/img/service_1.png";
import ProfilePic2 from "../Assets/img/service_2.png";
import ProfilePic3 from "../Assets/img/service_3.png";

const Service = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Main Services</p>
        <h1 className='primary-heading service'>
          Learn services to focus on your beauty
        </h1>
        <p className='primary-text ' style={{ color: "#8b8b8b" }}>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className='service-card'>
        <div className='testimonial-section-top'>
          <img src={ProfilePic1} alt='' />
          <h2>Beauty consultation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className='testimonial-section-top'>
          <img src={ProfilePic2} alt='' />

          <h2>Skin treatments</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className='testimonial-section-top'>
          <img src={ProfilePic3} alt='' />

          <h2>Beauty product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;

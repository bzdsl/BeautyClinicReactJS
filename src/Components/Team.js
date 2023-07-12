/** @format */
import React from "react";
import ProfilePic1 from "../Assets/img/unsplash_FVh_yqLR9eA.png";
import ProfilePic2 from "../Assets/img/unsplash_mEZ3PoFGs_k.png";
import ProfilePic3 from "../Assets/img/unsplash_FVh_yqLR9eA.png";

const Team = () => {
  return (
    <div className='work-section-wrapper-team'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Professional Teams</p>
        <h1 className='primary-heading service'>The Professional expert</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className='service-card'>
        <div className='testimonial-section-top'>
          <img src={ProfilePic1} alt='' />
          <h1>Surgeon</h1>
          <h2>Briyan Nevalli</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className='testimonial-section-top'>
          <img src={ProfilePic2} alt='' />
          <h1>Stylist expert</h1>
          <h2>Bella sebastian</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className='testimonial-section-top'>
          <img src={ProfilePic3} alt='' />
          <h1>Stylist expert</h1>
          <h2>Lilly Adams</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

/** @format */

import React from "react";
import "../../index.css";
import "./Home.css";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/hero.png";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt='' />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>Clinic & beauty consultant</h1>
          <p className='primary-text'>
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <button className='secondary-button'>More details</button>
        </div>
        <div className='home-image-section'>
          <img src={BannerImage} alt='' />
        </div>
      </div>
      <div class='rectangles'>
        <span class='rectangle'></span>
        <span class='rectangle active'></span>
        <span class='rectangle'></span>
      </div>
    </div>
  );
};

export default Home;

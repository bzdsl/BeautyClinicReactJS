/** @format */

import React from "react";
import "../../index.css";
import "./Home.css";
import Button from "@mui/material/Button";
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
          <Button
            variant='contained'
            sx={{
              width: "198px",
              height: "58px",
              backgroundColor: "#ff64ae",
              color: "#fff",
              padding: "0.5rem 1.75rem",
              fontSize: "18px",
              borderRadius: "5rem",
              fontWeight: "500",
              transition: "0.2s",

              "&:hover": {
                backgroundColor: "#f253a0",
              },
            }}>
            More Details
          </Button>
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

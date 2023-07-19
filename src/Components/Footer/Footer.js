/** @format */

import React from "react";
import "../../index.css";
import "./Footer.css";
import Logo from "../../Assets/img/footer-logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Background from "../../Assets/img/bg-footer1.png";
import Background2 from "../../Assets/img/footer-bt-bg.png";
import PlayButton from "../../Assets/icon/play-footer.svg";

import BackToTopButton from "./BackToTopButton";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='background-footer'>
        <img src={Background} className='logo' alt='Footer' />
      </div>
      <div className='main-content'>
        <div className='body'>
          <div className='logo-footer'>
            <img src={Logo} alt='footer' />

            <div className='content-footer'>
              <p className='title'>
                <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
              </p>
              <p className='desc'>Baker Steet 101, NY, United States.</p>
              <div className='contact-footer'>
                <p className='phone'>+521 569 8966.</p>
                <p className='mail'>mail@company.com</p>
              </div>
            </div>
          </div>

          <div className='pages'>
            <span>Pages</span>
            <ul className='page-list'>
              <li>
                <img src={PlayButton} alt='' />
                <p>Home</p>
              </li>
              <li>
                <img src={PlayButton} alt='' />
                <p>About</p>
              </li>
              <li>
                <img src={PlayButton} alt='' />
                <p>Gallery</p>
              </li>
              <li>
                <img src={PlayButton} alt='' />
                <p>Services</p>
              </li>
              <li>
                <img src={PlayButton} alt='' />
                <p>Team</p>
              </li>
            </ul>
          </div>

          <div className='pages'>
            <span>Informations</span>
            <ul className='page-list'>
              <li>
                <img src={PlayButton} alt='' />
                <p>Terms & conditions</p>
              </li>
              <li>
                <img src={PlayButton} alt='' />
                <p>Privacy policy</p>
              </li>
              <li>
                <img src={PlayButton} alt='' />
                <p>Blog</p>
              </li>
              <li>
                <img src={PlayButton} alt='' />
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-footer'>
          <div className='socials'>
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
          <span className='copy-right'>
            © AltDesain Studio 2021 - All right reserved.
          </span>
        </div>
        <div className='ft-bt-bg'>
          <img src={Background2} alt='' />
        </div>

        <BackToTopButton />
      </div>
    </div>
  );
};

export default Footer;

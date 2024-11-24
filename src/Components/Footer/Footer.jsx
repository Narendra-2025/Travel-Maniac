import React from "react";
import "./Footer.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer Container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>Travel-Maniac</span>
          </div>
        </div>
        <div className="socials flex">
          <ImFacebook className="icon" />
          <BsTwitter className="icon" />
          <AiFillInstagram className="icon" />
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Help Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">(555) 123-4567.</span>
          <span className="email">contact@travelmaniac.com</span>
          <li>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">travel</a>
            <a href="#">Blog</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, {useEffect} from "react";
import "./Footer.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  },[])
  return (
    <div className="footer">
      <div className="secContainer Container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos = 'fade-up'>
            <BiLogoMediumOld className="icon" />
            <span>Travel-Maniac</span>
          </div>
          <div className="socials flex" data-aos = 'fade-up'>
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        

        <div className="footerLinks" data-aos = 'fade-up'>
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
        <div className="footerLinks" data-aos = 'fade-up'>
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
        <div className="footerLinks" data-aos = 'fade-up'>
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

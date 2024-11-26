import React , {useEffect} from "react";
import "./Home.css";
//imported video from assests
import Video from "../../asset/video1.mp4";
import image1 from '../../asset/arora.jpg';
import image2 from '../../asset/mount-fuji.jpg';
import image3 from '../../asset/norway.jpg';
import image4 from '../../asset/santo.jpg';

import Aos from "aos";
import 'aos/dist/aos.css'

//imported icons
import {AiOutlineSwapRight} from 'react-icons/ai';

const Home = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  },[])
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos = 'fade-up'>Discover your next adventure with us!</h1>
        <p data-aos = 'fade-up'>Welcome to your next adventure! Explore destinations, plan your trips, and make memories that last forever</p>
        <button className="btn flex" data-aos = 'fade-up'>GET STARTED <AiOutlineSwapRight className = 'icon'/></button>
      
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos = 'fade-up'>Popular Places</h3>
          <div className="images flex" data-aos = 'fade-up'>
            <img src={image1} alt="Destination Images" />
            <img src={image2} alt="Destination Images" />
            <img src={image3} alt="Destination Images" />
            <img src={image4} alt="Destination Images" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home

import React from "react";
import "./Home.css";
//imported video from assests
import Video from "../../asset/video1.mp4";

//imported icons
import {AiOutlineSwapRight} from 'react-icons/ai';

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Discover your next adventure with us - Explore, Dream, Travel!</h1>
        <p>Welcome to your next adventure! Explore destinations, plan your trips, and make memories that last forever</p>
        <button className="btn flex">GET STARTED <AiOutlineSwapRight className = 'icon'/></button>
      
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Popular Places</h3>
          <div className="images flex">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home

import React , {useEffect} from 'react'
import './Subscribe.css';
import Aos from "aos";
import 'aos/dist/aos.css';

import image from '../../asset/talking lady.jpg';
const Subscribe = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={image} alt="Customer-care" data-aos = 'fade-down'/>
        <div className="textDiv">
          <h4 data-aos = 'fade-up'> Best Way To Start Your Journey!</h4>
          <p data-aos = 'fade-up'>
            We offer personalized itineraries tailored to individual prefrences 
            and intrests.
          </p>
          <button className="btn" data-aos = 'fade-up'>
            Start Here
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
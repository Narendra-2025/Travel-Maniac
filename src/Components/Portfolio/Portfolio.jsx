import React, {useEffect} from 'react'
import './Portfolio.css'
import icon1 from '../../asset/kindpng_10220.png'
import icon2 from '../../asset/destination.png'
import icon3 from '../../asset/support.png'
import image from '../../asset/hikes.jpg'
import Aos from "aos";
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);
  
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos = 'fade-up'>Why Should You Choose Us</h3>
            <p data-aos = 'fade-up'>
              We have experience in the travel industry.
            </p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex" data-aos = 'fade-up'>
              <div className="iconDiv">
                <img src={icon1} alt="Health and Safety" />
              </div>

              <div className="infor">
                <h4 data-aos = 'fade-up'>safety and support</h4>
                <p data-aos = 'fade-up'>
                  The safety and well-being of our clients are our highest priorities.
                  We uphold exceptional safety standards and ensure round-the-clock emergency
                  support to guarantee a secure and worry-free experience throughout your journey.
                </p>
              
              </div>
            </div>
            

            <div className="singlePortfolio flex" data-aos = 'fade-up'>
              <div className="iconDiv">
                <img src={icon2} alt="Destination" />
              </div>

              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  we take pride in offering a wide variety of destinations to suit every traveler's preferences.
                  Whether you seek tranquil retreats, cultural exploration, or thrilling adventures,
                  our platform ensures you find the perfect getaway tailored to your desires.
                </p>
              
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos = 'fade-up'>
              <div className="iconDiv">
                <img src={icon3} alt="Support" />
              </div>

              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                 We’re here for you, anytime you need us.
                 Our 24/7 customer support ensures that help is always available,
                  making your travel planning and experiences seamless and worry-free. Your journey is our priority.
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos = 'fade-down'>
          <img src={image} alt="grid image" />
        </div>
      </div>

    </div>
  )
}

export default Portfolio
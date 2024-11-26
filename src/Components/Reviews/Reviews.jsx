import React , {useEffect} from "react";
import "./Reviews.css";
//Importing icons
import { AiFillStar } from "react-icons/ai";
import pic1 from "../../asset/user1.jpg";
import pic2 from "../../asset/user2.jpg";
import pic3 from "../../asset/user3.jpg";
import pic4 from "../../asset/user4.jpg";
import pic5 from "../../asset/user5.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'

const Reviews = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos = 'fade-up'>FROM OUR CLIENTS</span>
          <h3 data-aos = 'fade-up'>
            Hear from our delighted travelers about their unforgettable
            journeys!
          </h3>
          <p data-aos = 'fade-up'>
            By choosing us, you are joining travelers who trust us to create
            unforgettable journeys. Read their reviews and see why we are the
            preferred choice for exceptional travel experiences.
          </p>
          <span className="stars flex" data-aos = 'fade-up'>
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={pic1} alt="Client Image" data-aos = 'fade-up'/>
            <img src={pic2} alt="Client Image" data-aos = 'fade-up'/>
            <img src={pic3} alt="Client Image" data-aos = 'fade-up'/>
            <img src={pic4} alt="Client Image" data-aos = 'fade-up'/>
          </div>
        </div>
        <div className="imgDiv">
          <img src={pic5} alt="Div Image" data-aos = 'fade-down' />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

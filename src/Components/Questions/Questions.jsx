import React, { useState }  from "react";
import "./Questions.css";
import { Accordion } from "./Accordion";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Questions = () => {
  const [active, setActive] = useState("");
  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);
   
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos = 'fade-up'>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion
            title="How do I choose right travel destination for me?"
            desc="To choose the right travel destination,
                consider your interests, budget,
                and the type of experience you want—whether it's adventure, 
                relaxation, or cultural exploration. Additionally, 
                check the season, climate, 
                and any travel restrictions to ensure a smooth trip."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="The best time to visit a destination depends on its climate and
             activities. For tropical beaches, aim for dry seasons, while ski resorts 
             are perfect during winter. Always check local weather and events
              for an optimal travel experience."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What should I pack for my trip?"
            desc="Pack essentials based on your destination's weather and activities.
             Include versatile clothing, travel documents, a first-aid kit, 
             and any destination-specific items like adapters or sunscreen."
            active={active}
            setActive={setActive}
          />

          <Accordion
            title="What documents do I need for international travel?"
            desc="You’ll need a valid passport, visa (if required),
             and travel insurance. Check destination-specific entry
              requirements like vaccination certificates or permits."
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4 data-aos = 'fade-up'>Do you have any specific questions?</h4>
            <p data-aos = 'fade-up'>
              Please Fill the form below our dedicated team will get in touch
              with you as soon as possible.
            </p>
          </div>
          <div className="formContent grid">
            <input type="email" placeholder="Enter email address" data-aos = 'fade-up' />
            <textarea placeholder="Enter your question here" data-aos = 'fade-up'></textarea>
            <button className="btn" data-aos = 'fade-up'>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

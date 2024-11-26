import React , {useEffect} from "react";
import "./Questions.css";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css';

  

export const Accordion = ({ title, desc, active, setActive }) => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);
  return (
    <div className="accordionContainer" data-aos = 'fade-up'>
      <span className={`title flex ${active === title ? "activeTitle" : ""}`}>
        {title}
        <span onClick={() => setActive(title)}>
          {active === title ? <BsArrowDownCircle className="icon" /> : (<BsArrowUpCircle className="icon"/>)}
        </span>
      </span>
      <p className={`description ${active === title ? "show" : ""}`}>
        {desc}
      </p>
    </div>
  );
};

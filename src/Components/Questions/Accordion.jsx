import React from "react";
import "./Questions.css";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

export const Accordion = ({ title, desc, active, setActive }) => {
  return (
    <div className="accordionContainer">
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

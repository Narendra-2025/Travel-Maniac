import React from "react";
import "./Destinations.css";

//import icon

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import image1 from "../../asset/photo1.jpg";
import image2 from "../../asset/beach.jpg";
import image3 from "../../asset/park.jpg";
import image4 from "../../asset/lake-therm.jpg";
import image5 from "../../asset/mount.jpg";
import image6 from "../../asset/rockymount.jpg";
import image7 from "../../asset/island.jpg";
import image8 from "../../asset/nature2.jpg";

//lets create an array that is gonna contain all destination data and we loop through

const destinations = [
  {
    id: 1,
    img: image1,
    name: "seychellas islands",
    location: "indian ocean",
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: "Champagne Beach",
    location: "Espiritu Santo",
    rating: 4.8,
  },
  {
    id: 3,
    img: image3,
    name: "Centennial Park",
    location: "Sydney",
    rating: 4.5,
  },
  {
    id: 4,
    img: image4,
    name: "Lake Lucerne",
    location: "Switzerland",
    rating: 4.7,
  },
  {
    id: 5,
    img: image5,
    name: "Lake Tahoe",
    location: "california",
    rating: 4.9,
  },
  {
    id: 6,
    img: image6,
    name: "Cappadocia",
    location: "Turkey",
    rating: 4.6,
  },
  {
    id: 7,
    img: image7,
    name: "Maldives island",
    location: "indian ocean",
    rating: 4.8,
  },
  {
    id: 8,
    img: image8,
    name: "Mount Dalsnibba",
    location: "Norway",
    rating: 4.7,
  },
];
const Destinations = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">Explore Now</span>
          <h3>Find Your Dream Destinations </h3>
          <p>
            Fill in the feilds below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>
          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="date" />
          </div>
          <button className="btn flex">
            <BiSearchAlt className="icon" /> Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recomended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv">
                  <img src={destination.img} alt="Destination Image" />

                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Destinations;
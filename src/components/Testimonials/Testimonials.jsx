import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setselected] = useState(0);
  const tLenght = testimonialsData.length;
  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">what they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span className="testimonialsData-name">
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt=""></img>
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setselected(tLenght - 1)
                : setselected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="leftArrow"
          />

          <img
            onClick={() => {
              selected === tLenght - 1
                ? setselected(0)
                : setselected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="rightArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

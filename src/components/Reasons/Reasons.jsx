import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="GYM Image1" className="image1"></img>
        <img src={image2} alt="GYM Image2" className="image2"></img>
        <img src={image3} alt="GYM Image3" className="image3"></img>
        <img src={image4} alt="GYM Image4" className="image4"></img>
      </div>

      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick mark"></img>
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="tick mark" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="tick mark" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="tick mark" />
            <span>reliable partners</span>
          </div>
        </div>
        <span id="our-partners">our partners</span>

        <div className="partner">
          <img src={nb} alt="nb"></img>
          <img src={adidas} alt="adidas"></img>
          <img src={nike} alt="nike"></img>
        </div>
      </div>
    </div>
  );
};

export default Reasons;

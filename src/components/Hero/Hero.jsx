import React from "react";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/* the best ad */}

        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero Heading */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal live up
              your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}

        <div className="figures">
          <div>
            <spam>+140</spam>
            <spam>Expert Coaches</spam>
          </div>

          <div>
            <spam>+978</spam>
            <spam>Members Joined</spam>
          </div>

          <div>
            <spam>+50</spam>
            <spam>Fitness Programs</spam>
          </div>
        </div>

        {/* Hero button */}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right side of content */}

      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="Heart"></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* Hero images */}

        <img src={hero_image} alt="hero image" className="hero-image"></img>
        <img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
        ></img>

        {/* Calories */}

        <div className="calories">
          <img src={Calories} alt="Calories"></img>
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
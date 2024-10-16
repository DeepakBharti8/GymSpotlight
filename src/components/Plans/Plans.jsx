import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" id="programs">
        <span className="stroke-text">Ready to Started</span>
        <span>Your journey</span>
        <span className="stroke-text">Now withus</span>
      </div>

      {/* Plans Card */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span className="plan-price">${plan.price}</span>

            <div className="features">
                {plan.features.map((features, i) =>(
                    <div className="feature">
                        <img src={whiteTick} alt=""></img>
                        <span key={i}>{features} </span>
                    </div>
                ))}
            </div>

            <div><span>See more benefits -></span></div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

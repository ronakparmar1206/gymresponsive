import React from "react";
import { plansdata } from "./Plansdata";
import tick from "../Newfolder/tick.png";
import "./Plans.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Plans = () => {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="zoom-in" className="container" id="Plans">
        <div className="blur plansbur1"></div>
        <div className="blur plansblur2"></div>
        <div className="heading">
          <span className="textw">Ready to start</span>
          <span> Your Journey</span>
          <span className="textw">Now with us</span>
        </div>
        <div className="plans">
          {plansdata.map((ele) => {
            return (
              <div className="icon">
                {ele.image}
                <span>{ele.name}</span>
                <span>${ele.price}</span>
                <div className="features">
                  {ele.features.map((featu) => {
                    return (
                      <div className="feature">
                        <img src={tick} alt="" />
                        <span>{featu}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="benefit">
                  <span>See more benefits --></span>
                </div>
                <button className="btn2">Join now</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Plans;

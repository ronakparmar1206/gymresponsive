import React from "react";
import image1 from "../Newfolder/image1.png";
import image from "../Newfolder/image.png";
import image3 from "../Newfolder/image3.png";
import image4 from "../Newfolder/image4.png";
import tick from "../Newfolder/tick.png";
import nike from "../Newfolder/nike.png";
import adidas from "../Newfolder/adidas.png";
import air from "../Newfolder/air.png";
import "./Reason.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Reason = () => {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="reason" id="Why Us">
      <div className="leftreason">
        <img src={image1} alt="" />
        <img src={image} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="rightr">
        <div className="some">
          <h3>SOME REASONS</h3>
        </div>
        <div>
          <h1>
            <span className="textw">Why</span>
            <span> Choose Us?</span>
          </h1>
        </div>
        <div className="details">
          <div className="points">
            <span>
              <img src={tick} alt="" />
            </span>
            <span>Over 140+ experts coaches</span>
          </div>
          <div className="points">
            <span>
              <img src={tick} alt="" />
            </span>
            <span>Train faster and smarter</span>
          </div>
          <div className="points">
            <span>
              <img src={tick} alt="" />
            </span>
            <span>1 freev program for new user</span>
          </div>
          <div className="points">
            <span>
              <img src={tick} alt="" />
            </span>
            <span>Reliable Partners</span>
          </div>
          <p>Our Partners</p>
          <div className="brands">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={air} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;

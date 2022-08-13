import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Heart from "../Components/Newfolder/heart.png";
import Heros from "../Components/Newfolder/hero.png";
import Back from "../Components/Newfolder/back.png";
import Calories from "../Components/Newfolder/Calori.png";
// import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 2000 });
  }, []);
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 700 ? true : false;

  return (
    <motion.div data-aos="zoom-in" className="first-section" id="home">
      <div className="blur heroblur"></div>
      <div className="left">
        <Header />
        <div className="add">
          <span>the best fitness club in the town</span>
        </div>
        <div className="text">
          <div>
            <span className="textw">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body
            </span>
          </div>
        </div>
        <div className="figure">
          <div>
            <span>140+</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>56</span>
            <span>fitness Programs</span>
          </div>
        </div>
        <div className="buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right">
        <button className="btn">Join Now</button>

        <motion.div
          className="heart"
          initial={{ left: mobile ? "17rem" : "-1rem" }}
          whileInView={{ left: mobile ? "14rem" : "9rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>

        <div className="heroimage">
          <img src={Heros} alt="" className="hero" />
          <motion.img
            initial={{ right: "25rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            src={Back}
            alt=""
            className="back"
          />
        </div>

        <motion.div
          initial={{ right: "34rem" }}
          whileInView={{ right: "37rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
          {/* </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

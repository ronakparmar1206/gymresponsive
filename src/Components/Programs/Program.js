import React from "react";
import "./Program.css";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

import { Programsdata } from "./Programsdata";
import AOS from "aos";
import "aos/dist/aos.css";
const Program = () => {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="container1" id="program">
      <div className="heading">
        <span className="textw">Explore Our</span>
        <span> Programs</span>
        <span className="textw">to shape You</span>
      </div>
      <div className="programdata">
        {Programsdata.map((ele) => {
          return (
            <div className="category">
              {ele.image}
              <span>{ele.heading}</span>
              <span>{ele.details}</span>
              <div className="join">
                <span>Join Now</span>
                <span>
                  <BsArrowRight />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Program;

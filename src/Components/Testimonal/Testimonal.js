import React, { useState } from "react";
import "./Testimonal.css";
import { testimonaldata } from "./Testimonalsdata";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonal = () => {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 2000 });
  }, []);
  const transition = { type: "string", duration: 3 };
  const [selected, setselected] = useState(0);
  const tlength = testimonaldata.length;
  const next = () => {
    selected === 0 ? setselected(tlength - 1) : setselected(0);
  };
  const prev = () => {
    selected === 0 ? setselected(tlength - 1) : setselected(0);
  };
  return (
    <div data-aos="zoom-in" className="testimonal" id="Testimonials">
      <div className="left">
        <div>
          <span style={{ color: "orange" }}>TESTIMONALS</span>
        </div>
        <div className="testleft">
          <span className="textw">WHAT THEY</span>
          <span className="say">SAY ABOUT US</span>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
          >
            {testimonaldata[selected].review}>
          </motion.span>
          <span style={{ color: " orange" }}>
            {testimonaldata[selected].name}
          </span>
          <span>{testimonaldata[selected].status}</span>
        </div>
      </div>
      <div className="testright">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          // exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonaldata[selected].image}
          alt=""
        />
        <div className="arrows">
          <AiOutlineArrowLeft onClick={prev} />
          <AiOutlineArrowRight onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default Testimonal;

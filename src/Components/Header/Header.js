import React, { useState } from "react";
import Logo from "../Newfolder/logo.png";
import { ImCross, ImMenu } from "react-icons/im";
const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#program">Programs</a>
        </li>
        <li>
          <a href="#Why Us">Why Us</a>
        </li>
        <li>
          <a href="#Plans">Plans</a>{" "}
        </li>
        <li>
          <a href="#Testimonials"> Testimonials</a>
        </li>
      </ul>
      <div className="flex" style={{ marginBottom: toggle ? "9rem" : "0rem" }}>
        {toggle ? (
          <ImCross
            onClick={() => {
              settoggle(false);
            }}
          />
        ) : (
          <ImMenu
            onClick={() => {
              settoggle(true);
            }}
          />
        )}
        {toggle && (
          <div>
            <ul className="na " style={{ height: "20vh" }}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#program">Programs</a>
              </li>
              <li>
                <a href="#Why Us">Why Us</a>
              </li>
              <li>
                <a href="#Plans">Plans</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

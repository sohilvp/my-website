import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { darkModeToggle } from "./darkModeToggle";
import { gsapHomeAnimation } from "./gsapAnimation";
import { PiSunLight } from "react-icons/pi";
import { PiMoonStarsLight } from "react-icons/pi";
import downarrow from "../../assets/arrow-icon1.svg";
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Home = ({ width }) => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  let homeRef = useRef(null);
  let lastPRef = useRef(null);
  let mobile = width;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsapHomeAnimation();
    }, homeRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    darkModeToggle(darkMode);
  }, [darkMode, menu]);
  return (
    <div className="homeContainer" ref={homeRef} id="home">
      <nav>
        <div className="navContainer">
          <div className="logoContainer">
            <div className="logo"></div>
          </div>
          <div
            className={mobile ? "hamburger" : "none"}
            onClick={() => setMenu(!menu)}
          >
            {!menu ? (
              <HiOutlineMenuAlt3
                className={`hamburgerIcon ${!darkMode ? "light" : "dark"}`}
              />
            ) : (
              <MdClose
                className={`hamburgerIcon ${darkMode ? "light" : "dark"}`}
              />
            )}
          </div>
          <div className={!mobile ? "navLinks" : menu ? "mobileMenu" : "none"}>
            <div className="links">
              <a href="#projects" className="toggleColor">
                Work
              </a>
            </div>
            <div className="links">
              <a href="#about" className="toggleColor">
                Profile
              </a>
            </div>
            <div className="links">
              <a href="#contacts" className="toggleColor">
                Contact
              </a>
            </div>
            <div className="links">
              <a
                className="darkMode toggleDiffColor"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <PiSunLight className="darkModeIcon" />
                ) : (
                  <PiMoonStarsLight className="darkModeIcon" />
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="mainContainer">
        <div className="beforeText">
          <p>
            portfolio of sohil <span className="line"></span>
          </p>
        </div>
        <div className="mainText">
          <p className="firstP">junior</p>
          <div className="changeText">
            <span className="first">REACT</span>
            <span className="second">MERN</span>
          </div>
          <p className="lastP" ref={lastPRef}>
            developer
          </p>
        </div>
      </div>
      <div className="arrowContainer">
        <img src={downarrow} alt="" />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import Loader from "./Components/Loader/Loader";
import Home from "./Components/Home/Home";
import gsap from "gsap";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const cursorRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  let width = windowSize.width < 720;
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    };

    window.addEventListener("resize", handleResize);
    

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    let cursorPoint = cursorRef.current;

    let aList = document.querySelectorAll("a");
    gsap.set(cursorPoint, {
      width: "50px",
      height: "50px",
      position: "fixed",
      zIndex: 9999,
      borderRadius: "50%",
      border: "1px solid #242424",
      pointerEvents: "none",
    });
    let mouseMove = (e) => {
      let { clientX, clientY } = e;
      gsap.to(cursorPoint, { left: clientX, top: clientY });
    };
    let mouseEnter = (e) => {
      gsap.to(cursorPoint, { width: "12vw", height: "12vw", duration: 0.5 });
    };
    let mouseLeave = (e) => {
      gsap.to(cursorPoint, { width: "50px", height: "50px", duration: 0.5 });
    };
    window.addEventListener("mousemove", mouseMove);

    aList.forEach((a) => {
      a.addEventListener("mouseenter", mouseEnter);
      a.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);

      aList.forEach((p) => {
        a.removeEventListener("mouseenter", mouseEnter);
        a.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);
  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <Loader />
      <Home width={width} />
      <Projects width={width} />
      <About />
      <Contact />
    </>
  );
};

export default App;

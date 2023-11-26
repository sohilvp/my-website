import React, { useEffect, useRef, useState } from "react";
import "./loader.css";
import gsap from 'gsap'
const Loader = () => {
  
  let loaderRef = useRef(null);
  useEffect(() => {
    let ctx1 = gsap.context(() => {
      let loaderTl = gsap.timeline();
      loaderTl.to(".loader1", {
        height: "0vh",
        duration:1.5
      },).to('.loader2',{
        height: "0vh",
        duration:1.5
      },'-=1').to('.loader3',{
        height: "0vh",
        delay:.2,
        ease: "power4.inOut",
        duration:1.5,
      },'-=.2')
    }, loaderRef);
    return () => ctx1.revert();
  }, []);
  return (
    <div className="loaderContainer" ref={loaderRef}>
      <div className="loader1"></div>
      <div className="loader2"></div>
      <div className="loader3"></div>
    </div>
  );
};

export default Loader;

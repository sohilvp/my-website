import React, { useEffect, useRef } from "react";
import "./about.css";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  let splitRef1 = useRef(null);
  let splitRef2 = useRef(null);

  useEffect(() => {
    const split = new SplitType(splitRef1.current, {
      types: ["word", "chars"],
    });

    const split1 = new SplitType(splitRef2.current, {
      types: ["word", "chars"],
    });

    return () => {
      split.destroy();
      split1.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    let tl = gsap.timeline();

    mm.add("(max-width: 720px)", () => {
      tl.to(splitRef1.current, {
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: splitRef1.current,
          scrub: true,
          start: "top 90%",
          end: "top 80%",
        },
      }).to(splitRef2.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: splitRef2.current,
          scrub: true,
          start: "top 90%",
          end: "top 80%",
        },
      });
    });

    mm.add("(min-width: 721px)", () => {
      tl.to(splitRef1.current, {
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: splitRef1.current,
          scrub: true,
          start: "top 80%",
          end: "top 60%",
        },
      }).to(splitRef2.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: splitRef2.current,
          scrub: true,
          start: "top 80%",
          end: "top 60%",
        },
      });
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);
  return (
    <div className="aboutContainer" id="about">
      <h1>
        <span className="colour">A</span>bout
      </h1>
      <p>Hello, i'm Sohil</p>
      <p ref={splitRef1}>
        I'm a self-taught <span className="colours">MERN stack</span> developer
        based in kerala,india.I can develop
        <span className="colours">responsive</span> websites from scratch and
        raise them into modern <span className="colours">user-friendly</span>
        web experiences.
      </p>

      <p ref={splitRef2}>
        Transforming my <span className="colours">creativity</span> and
        knowledge into a website has been my
        <span className="colours">passion</span> for over a year. I have been
        helping various <span className="colours">clients</span> to establish
        their presence online. I always <span className="colours">strive</span>
        to learn about the newest technologies and
        <span className="colours">frameworks</span>.
      </p>
    </div>
  );
};

export default About;

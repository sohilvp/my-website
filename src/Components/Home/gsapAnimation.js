import gsap from "gsap";

export const gsapHomeAnimation = () => {
  let hometl = gsap.timeline();
  hometl &&
    hometl
      .to(".line", {
        width: "20vw",
        duration: 1,
        delay: 2,
      })
      .from(
        ".firstP",
        {
          y: 100,
          opacity: 0,
          duration: 1,
        },
        "a"
      )
      .from(
        [".changeText", ".lastP"],
        {
          y: 100,
          opacity: 0,
          duration: 1.2,
        },
        "a+=.2"
      )
      .to(".changeText", {
        transform: " rotateZ(-5deg)",
      })
      .to(".first", {
        width: 0,
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: "Power3.easeInOut",
      })
      .from(".arrowContainer img", {
        opacity: 0,
      })
      .to(".arrowContainer img", {
        opacity: 1,
        y: 20,
        yoyo: true,
        duration: 1,
        ease: "elastic.in(1,0.3)",
        repeat: -1,
      });
};

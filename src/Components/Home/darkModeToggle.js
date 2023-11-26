export const darkModeToggle = (darkMode) => {
  let pList = document.querySelectorAll("p");
  let first = document.querySelector(".first");
  let body = document.querySelector("body");
  let cursor = document.querySelector(".cursor");
  let line = document.querySelector(".line");
  let mobileMenu = document.querySelector(".mobileMenu");
  let links = document.querySelectorAll(".mobileMenu .links .toggleColor");
  let projectH3 = document.querySelectorAll("h3");
  let textToggle = document.querySelectorAll(".textToggle");
  let icons = document.querySelectorAll(".darkModeIcon");
  let toggleDiffColor = document.querySelectorAll(".toggleDiffColor");
  let moveTop = document.querySelector(".moveTop");
  let border = document.querySelectorAll(".rightContainer a");
  let h1List = document.querySelectorAll("h1");
  let aList = document.querySelectorAll(".toggleColor");

  if (darkMode) {
    body.style.background = "#040D12";
    first.style.background = "#040D12";
    line.style.background = "#fff";
    cursor.style.border = "1px solid #fff";
    moveTop.style.borderColor = "#fff";

    border.forEach((b) => {
      b.style.borderBottom = ".2vw solid #ff0044";
      b.style.color = "white";
    });

    icons.forEach((i) => {
      i.style.color = "#fff";
    });

    toggleDiffColor.forEach((td) => {
      td.style.color = "#fff";
    });

    pList.forEach((p) => {
      p.style.color = "white";
    });

    h1List.forEach((h1) => {
      h1.style.color = "white";
    });

    aList.forEach((a) => {
      a.style.color = "white";
    });

    textToggle.forEach((text) => {
      text.style.color = "#fff";
    });

    if (mobileMenu !== null) {
      mobileMenu.style.background = "#fff";

      icons.forEach((i) => {
        i.style.color = "#000";
      });

      links.forEach((l) => {
        l.style.color = "#000";
      });

      projectH3.forEach((h3) => {
        h3.style.borderColor = "#ff0044";
        h3.style.color = "#fff";
      });
    }
  } else {
    body.style.background = "#f0f0ff";
    first.style.background = "#f0f0ff";
    line.style.background = "#000";
    cursor.style.borderColor = "#000";
    moveTop.style.borderColor = "#000";

    icons.forEach((i) => {
      i.style.color = "#000";
    });

    border.forEach((b) => {
      b.style.borderBottom = ".2vw solid #000";
      b.style.color = "#000";
    });

    pList.forEach((p) => {
      p.style.color = "black";
    });

    toggleDiffColor.forEach((td) => {
      td.style.color = "#000";
    });

    h1List.forEach((h1) => {
      h1.style.color = "black";
    });

    aList.forEach((a) => {
      a.style.color = "black";
    });

    textToggle.forEach((text) => {
      text.style.color = "#000";
    });

    if (mobileMenu !== null) {
      mobileMenu.style.background = "#000";

      icons.forEach((i) => {
        i.style.color = "#fff";
      });

      links?.forEach((l) => {
        l.style.color = "#fff";
      });

      projectH3.forEach((h3) => {
        h3.style.color = "#000";
        h3.style.borderColor = "#000";
      });

      
    }
  }
};

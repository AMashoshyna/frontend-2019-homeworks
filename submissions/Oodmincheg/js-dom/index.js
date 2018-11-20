"use strict";
const handleMenuClick = event => {
  /*check if click was on mobile nav panel*/
  if (event.target.id === "mobile") {
    const navPanel = document.querySelector("nav");
    navPanel.classList.toggle("open");
  } else if (event.target.tagName === "LI") {
    /*check if click was on li element*/
    const navPanel = document.querySelector("nav");
    navPanel.classList.remove("open");
    const activeNav = document.getElementsByClassName("active")[0];
    activeNav.classList.add("inactive");
    activeNav.classList.remove("active");
    event.target.classList.add("active");
    const namePage = event.target.id;
    const page = pages.find(page => {
      if (namePage === page.title) {
        return page;
      }
    });

    const content = document.querySelector("main");
    /*delete contentadd content to main */

    content.removeChild(content.firstChild);
    content.insertAdjacentHTML("afterBegin", page.content);
  }
};
/*add listneres to navs panel(mobile and desktop)*/
const navs = document.getElementsByTagName("nav");
Array.prototype.forEach.call(navs, nav => {
  nav.addEventListener("click", handleMenuClick);
});

/* add content if load first time*/
const main = document.querySelector("main");
if (main.innerHTML === "") {
  main.insertAdjacentHTML("afterBegin", pages[0].content);
}

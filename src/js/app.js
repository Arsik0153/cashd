import Rellax from 'rellax'
import {TweenMax, Expo} from "gsap/TweenMax";


// Intro

window.addEventListener("load", () => {

  TweenMax.to(".active", 1, {
    y: -100,
    opacity: 0,
    delay: 0.4
  });

  TweenMax.to(".nonactive", 1, {
    display: "block",
    opacity: 1,
    delay: 1.2
  }); 

  TweenMax.to(".nonactive", 1, {
    y: -100,
    opacity: 0,
    delay: 1.8
  });

  TweenMax.to(".overlay", 1.6, {
    y: "-100%",
    delay: 2.2,
    ease: Expo.easeInOut
  });

});


const rell = new Rellax('.rellax');

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", `top: ${  e.pageY - 2}px; left: ${e.pageX - 2}px`);
});

document.addEventListener("scroll", e => {
  cursor.setAttribute("style", `opacity: 0`);
});


const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", e => {
  cursor2.setAttribute("style", `top: ${  e.pageY - 25}px; left: ${e.pageX - 25}px`);
});

document.addEventListener("scroll", e => {
  cursor2.setAttribute("style", `opacity: 0`);
});

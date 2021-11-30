"use strict";
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const VISIBLE_CLASSNAME = "visible"
const arrowUp = document.querySelector(".arrow-up");
const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");
const nav = document.querySelector(".navbar");
const dayNightToggleIcon = document.querySelector(".day-night-toggle");



/* 작은 화면에서 토글 버튼(navbar-toggle-btn) 누르면 메뉴 보이게 하는 작업 */
navbarToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

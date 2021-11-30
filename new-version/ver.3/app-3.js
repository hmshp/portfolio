"use strict";
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const VISIBLE_CLASSNAME = "visible";
const arrowUp = document.querySelector(".arrow-up");
const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");
const nav = document.querySelector(".navbar");
const dayNightToggleIcon = document.querySelector(".day-night-toggle");

/* arrow up 버튼 스크롤 Home 높이의 반 이상 내리면 화살표 아이콘 보이게 하는 작업 */
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add(VISIBLE_CLASSNAME);
  } else {
    arrowUp.classList.remove(
      VISIBLE_CLASSNAME
    ); /* 스크롤 다시 위로 올리면 화살표 사라지게 */
  }
});

/* 화살표 누르면 맨 위로 가게 하는 작업 */
arrowUp.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

/* 작은 화면에서 토글 버튼(navbar-toggle-btn) 누르면 메뉴 보이게 하는 작업 */
navbarToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

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

/* day-night 모드 토글 기능(night 모드일 때는 배경색과 글자색 서로 바꾸기) */
dayNightToggleIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    dayNightToggleIcon.innerHTML = `<i class="fas fa-toggle-on"></i>`;
  } else {
    dayNightToggleIcon.innerHTML = `<i class="fas fa-toggle-off"></i>`;
  }
  /* 다크 모드일 때 클릭하면 on 아이콘으로 바꾸고 데이 모드일 때 클릭하면 off 아이콘으로 바꾸기 */
});

/* 언어 설정(EN / KO) 기능도 있으면 더 좋은 웹사이트가 되지 않을까? - 포트폴리오 웹사이트에는 굳이 필요 없을 듯. 그냥 한글버전 웹사이트를 하나 더 만들고 링크 거는 게 나을 것 같다*/

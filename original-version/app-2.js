const skills = document.querySelector(".menu-item-skills a");
const tools = document.querySelector(".menu-item-tools a");
const projects = document.querySelector(".menu-item-projects a");
/*  */
const ACTIVE_CLASSNAME = "active";

function changeColor(clickedMenu) {
  //현재 active인 클래스에서 active 제거
  const activeItem = document.querySelector(".active");
  activeItem.classList.remove(ACTIVE_CLASSNAME);

  //클릭한 항목 클래스에 active 추가
  clickedMenu.classList.add(ACTIVE_CLASSNAME);
}

skills.addEventListener("click", function () {
  changeColor(skills);
});
tools.addEventListener("click", function () {
  changeColor(tools);
});
projects.addEventListener("click", function () {
  changeColor(projects);
});

// function move() {
//   const hashValue = location.hash;

//   console.log(`hash value: ${hashValue}`);
// }

// window.addEventListener('hashchange', move);

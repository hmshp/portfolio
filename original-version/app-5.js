const skills = document.querySelector(".menu-item-skills a");
const home = document.querySelector(".menu-item-home a");
const tools = document.querySelector(".menu-item-tools a");
const projects = document.querySelector(".menu-item-projects a");
const mainContent = document.querySelector(".main-content");
const homeContent = document.querySelector(".home-content");
const skillsContent = document.querySelector(".skills-content");
const toolsContent = document.querySelector(".tools-content");
const projectsContent = document.querySelector(".projects-content");
const main = document.querySelector("main");

const ACTIVE_CLASSNAME = "active-item";

function changeColor(clickedMenu) {
  //현재 active인 클래스에서 active 제거
  const activeItem = document.querySelector(".active-item");
  activeItem.classList.remove(ACTIVE_CLASSNAME);

  //클릭한 항목 클래스에 active 추가
  clickedMenu.classList.add(ACTIVE_CLASSNAME);
}

function router() {
  //해시 라우팅(경로 지정)
  const url = location.hash;
  console.log(url);
  // if (url === "#/page/home") {
  //   main.innerHTML = `<p>${homeContent.innerHTML}</p>`;
  // } else if (url === "#/page/skills") {
  //   main.innerHTML = `<p>${skillsContent.innerHTML}</p>`;
  // }

  switch (url) {
    case "#/page/home":
      console.log("home 페이지입니다.");
      main.innerHTML = `<p>${homeContent.innerHTML}</p>`;
      break;
    case "#/page/skills":
      console.log("skills 페이지입니다.");
      main.innerHTML = `<p>${skillsContent.innerHTML}</p>`;
      break;
    case "#/page/tools":
      main.innerHTML = `<p>${toolsContent.innerHTML}</p>`;
      break;
    case "#/page/projects":
      main.innerHTML = `<p>${projectsContent.innerHTML}</p>`;
      break;
    default:
      mainContent = `<p>${homeContent.innerHTML}</p>`;
  }
}

home.addEventListener("click", function () {
  changeColor(home);
});
skills.addEventListener("click", function () {
  changeColor(skills);
});
tools.addEventListener("click", function () {
  changeColor(tools);
});
projects.addEventListener("click", function () {
  changeColor(projects);
});

window.addEventListener("hashchange", router);

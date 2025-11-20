const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
const panels = document.querySelectorAll(".panel");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const yearString = document.querySelector(".changeYear");

openBtn.addEventListener("click", () => {
  nav.forEach((navList) => navList.classList.add("visible"));
});
closeBtn.addEventListener("click", () => {
  nav.forEach((navList) => navList.classList.remove("visible"));
});

const appearOnScroll = () => {
  var scrollAppear = document.querySelector(".content-flex");
  var enterPosition = scrollAppear.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.7;

  if (enterPosition < screenPosition) {
    scrollAppear.classList.add("text-1-appear");
  }
}
window.addEventListener("scroll", appearOnScroll);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses=()=> {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//updates to current year
const getCurrentYear = () => {
  if (yearString) {
    const currentYear = new Date().getFullYear();
    yearString.textContent = `Copyright @ ${currentYear}`;
  } else {
    return;
  }
};
document.addEventListener("DOMContentLoaded", getCurrentYear);
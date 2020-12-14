const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
const panels = document.querySelectorAll(".panel");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active")
// })

function appearOnScroll() {
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

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
const panels = document.querySelectorAll(".panel");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const yearString = document.querySelector(".changeYear");
const form = document.querySelector(".contact-me");
const submitBtn = form.querySelector("button[type='submit']");
const modal = document.querySelector("#successModal");
const closeButn = document.querySelector(".modal .close");
const modalBtn = document.querySelector(".modal-btn");


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

//form validation
form.addEventListener("submit", async (e) =>{
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "168d3f13-fcd1-438d-8c42-f871cabae735");

  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json();
    if (response.ok) {
      modal.style.display = "block";
      form.reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    alert("An error occurred, please try again later.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;   
  }
})

// Modal close functionality
closeButn.addEventListener("click", () => {
  modal.style.display = "none";
});

modalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

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
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });

});

function appearOnScroll() {
    var scrollAppear = document.querySelector('.content-flex');
    var enterPosition = scrollAppear.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.7

    if (enterPosition < screenPosition) {
        scrollAppear.classList.add('text-1-appear');
       
    }
}

window.addEventListener('scroll', appearOnScroll)


document.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const ctaButton = document.querySelector(".nav-links .cta");
    const heroHeight = document.querySelector(".hero").offsetHeight;

    if (window.scrollY > heroHeight - 50) {
        navbar.classList.add("scrolled");
        ctaButton.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        ctaButton.classList.remove("scrolled");
    }
});



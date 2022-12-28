const hamburger = document.querySelector(".nav--hamburger");
const nav__menu = document.querySelector(".nav--menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav__menu.classList.toggle("active");
});
document.querySelectorAll(".nav--link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav__menu.classList.remove("active");
  })
);

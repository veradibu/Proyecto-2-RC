const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("bg-dark");
  } else {
    nav.classList.remove("bg-dark");
  }
});
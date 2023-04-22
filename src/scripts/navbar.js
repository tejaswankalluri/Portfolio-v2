/* eslint-disable */
/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======= orignal page redirect ========*/

function redirectpage() {
  const redirect_card = document.querySelector("#redirect_nav");
  const url = window.location.hostname;
  if (url.includes("tejaswan.me") || url.includes("localhost"))
    redirect_card.style.display = "none";
  else redirect_card.style.display = "block";
}
redirectpage();

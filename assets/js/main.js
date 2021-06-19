/*==================== SHOW MENU ====================*/
const showHide = (toggleSelect, navSelect) => {
  const toggle = document.querySelector(toggleSelect),
    nav = document.querySelector(navSelect);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showHide("i.fa-bars", "nav.navbar");
showHide("i.fa-times", "nav.navbar");
showHide("i.fa-comments", "#modal");
showHide("span.close", "#modal");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".navbar__link");

function linkAction() {
  const navMenu = document.querySelector("nav.navbar");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ===================== SCROLL HEADER =================== */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar__link a[href*=" + sectionId + "]")
        .classList.add("active");
      document.querySelector("#" + sectionId).classList.add("animation");
    } else {
      document
        .querySelector(".navbar__link a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* ============== WEB STORAGE ================ */

window.onload = function () {
  if (localStorage) {
    document
      .getElementById("form-contact")
      .addEventListener("submit", function () {
        let formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };
        data = localStorage.getItem("formData") + JSON.stringify(formData);
        localStorage.setItem("formData", data);
      });
  }
};

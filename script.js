const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.addEventListener("click", (e) => {
    if (e.target instanceof Element && e.target.matches("a")) {
      nav.classList.remove("open");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") nav.classList.remove("open");
  });
}

const viewProjects = document.getElementById("view-projects");
if (viewProjects) {
  viewProjects.addEventListener("click", (e) => {
    const el = document.getElementById("projects");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

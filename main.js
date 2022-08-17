const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("body");

// navigation toggler function
const navbarAction = (nav) => {
  if (nav.classList.contains("left-full")) {
    nav.classList.remove("left-full");
    body.classList.add("overflow-y-hidden");
  } else {
    nav.classList.add("left-full");
    body.classList.remove("overflow-y-hidden");
  }
};

toggleBtn.addEventListener("click", () => {
  navbarAction(sidebar);
});
closeBtn.addEventListener("click", () => {
  navbarAction(sidebar);
});

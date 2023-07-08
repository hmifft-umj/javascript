const body = document.getElementsByClassName("body")[0];
const buttonToggle = document.getElementsByClassName("button__toggle")[0];

let backgroundColorIsDark = false;

function toggleColor() {
  if (backgroundColorIsDark) {
    body.classList.remove("dark__mode");
    buttonToggle.textContent = "Light Mode ☀️";
    buttonToggle.classList.remove("button__toggle__dark");
    backgroundColorIsDark = false;
  } else {
    body.classList.add("dark__mode");
    buttonToggle.textContent = "Dark Mode 🌕";
    buttonToggle.classList.add("button__toggle__dark");
    backgroundColorIsDark = true;
  }
}

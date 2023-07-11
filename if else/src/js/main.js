const formInput = document.getElementsByClassName("form__input");
const button = document.getElementById("btn");

const showPassword = () => {
  if (formInput[1].type === "password") {
    formInput[1].type = "text";
  } else {
    formInput[1].type = "password";
  }
};

const buttonValidate = () => {
  if (formInput[0].value === "" || formInput[1].value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};

for (const input of formInput) {
  input.addEventListener("input", () => {
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("form__error");
    if (input.nextSibling) {
      input.parentNode.removeChild(input.nextSibling);
    }
    if (input.value === "") {
      const errorName = input.getAttribute("name");
      errorSpan.textContent = `${errorName} cannot be empty`;
      input.parentNode.appendChild(errorSpan);
    }
    buttonValidate();
  });
}

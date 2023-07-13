const passwordCheckbox =
  document.getElementsByClassName("password__checkbox")[0];
const formEmail = document.getElementsByName("email")[0];
const formPassword = document.getElementsByName("password")[0];
const button = document.getElementById("btn");

const showPassword = () => {
  if (formPassword.type === "password") {
    formPassword.type = "text";
  } else {
    formPassword.type = "password";
  }
};

const emailValidate = (email) => {
  addErrorSpanEmail(email);
};

const passwordValidate = (password) => {
  addErrorSpanPassword(password);
};

const addErrorSpanEmail = (email) => {
  email.toLowerCase();
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("form__error");

  removeErrorSpanEmail();

  if (email === "") {
    errorSpan.textContent = "Email cannot be empty";
    formEmail.parentNode.appendChild(errorSpan);
  } else if (!hasEmail.test(email)) {
    errorSpan.textContent = "Email not valid";
    formEmail.parentNode.appendChild(errorSpan);
  }
};

const removeErrorSpanEmail = () => {
  if (formEmail.nextSibling) {
    formEmail.parentNode.removeChild(formEmail.nextSibling);
  }
};

const addErrorSpanPassword = (password) => {
  const hasUppercase = /[A-Z]/;
  const hasNumber = /\d/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("form__error");

  removeErrorSpanPassword();

  if (password.length <= 8) {
    errorSpan.textContent = "Password must be at least 8 characters";
    formPassword.parentNode.appendChild(errorSpan);
  } else if (!hasUppercase.test(password)) {
    errorSpan.textContent = "Password must be contain uppercase letter";
    formPassword.parentNode.appendChild(errorSpan);
  } else if (!hasNumber.test(password)) {
    errorSpan.textContent = "Password must be contain number";
    formPassword.parentNode.appendChild(errorSpan);
  } else if (!hasSpecialChar.test(password)) {
    errorSpan.textContent = "Password must be contain character";
    formPassword.parentNode.appendChild(errorSpan);
  }
};

const removeErrorSpanPassword = () => {
  if (formPassword.nextSibling) {
    formPassword.parentNode.removeChild(formPassword.nextSibling);
  }
};

const buttonValidate = () => {
  if (formEmail.nextSibling || formPassword.nextSibling) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};

formEmail.addEventListener("input", () => {
  emailValidate(formEmail.value);
  buttonValidate();
});

formPassword.addEventListener("input", () => {
  passwordValidate(formPassword.value);
  buttonValidate();
});

const formInput = document.getElementsByClassName("form__input");
const formError = document.getElementsByClassName("form__error");
const button = document.getElementById("btn");

const buttonValidate = () => {
  if (formInput[0].value === "" || formInput[1].value === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};

const formValidate = () => {
  for (let i = 0; i < formInput.length; i++) {
    if (formInput[i].value === "") {
      formError[i].style.display = "inline-block";
    } else {
      formError[i].style.display = "none";
    }
  }
  buttonValidate();
};

for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener("input", formValidate);
}

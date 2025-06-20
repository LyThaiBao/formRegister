let formInput = document.querySelectorAll(".form__input input");
let formInputName = document.querySelector(".form__userName input");
let formInputMail = document.querySelector(".form__mail input");
let formInputPassword = document.querySelector(".form__password input");
let formInputConfirm = document.querySelector(".form__confirm input");
let form = document.querySelector(".form");
let clearAll = document.querySelector(".clearAll");

function showError(itemError, message) {
  itemError.nextElementSibling.textContent = message;
}

function showSuccess(itemSuccess) {
  showError(itemSuccess, "");
  itemSuccess.classList.add("success");
}

function isLengthError(input, min, max) {
  if (input.value.trim().length < min && input.value.trim() != "") {
    showError(input, `Phai lon hon ${min} ki tu`);
    return true;
  } else if (input.value.length > max) {
    showError(input, `Phai be hon ${max} ki tu`);
    return true;
  } else if (!input.value) {
    showError(input, "Khong duoc bo trong");
    return true;
  } else {
    showSuccess(input);
    return false;
  }
}

function isErrorMail(input) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regex.test(input.value.trim())) {
    showSuccess(input);
    return false;
  } else if (!regex.test(input.value.trim()) && input.value.trim() != "") {
    showError(input, "Email khong hop le");
    return true;
  } else {
    showError(input, "Khong duoc bo trong");
    return true;
  }
}

function isErrorPasswordMatch(password, confirmPassword) {
  if (password.value != confirmPassword.value) {
    showError(confirmPassword, "Mat khau khong trung khop");
    return true;
  } else if (
    password.value === confirmPassword.value &&
    password.value === ""
  ) {
    showError(confirmPassword, "");
  } else {
    showSuccess(confirmPassword);
  }
}
clearAll.addEventListener("click", (e) => {
  form.reset();
  formInput.forEach((value, index) => {
    showError(value, "");
    value.classList.remove("success");
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  isLengthError(formInputName, 5, 50);
  isLengthError(formInputPassword, 5, 50);
  isErrorMail(formInputMail);
  isErrorPasswordMatch(formInputPassword, formInputConfirm);
});
console.log(formInputName);

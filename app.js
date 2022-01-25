const form = document.getElementById("signup-form");
const firstName = document.getElementById("signup-firstname");
const lastName = document.getElementById("signup-lastname");
const starSign = document.getElementById("starsign");
const age = document.getElementById("signup-age");
const ageError = document.getElementsByClassName("age-error");
const firstNameError = document.getElementsByClassName("firstname-error");
const lastNameError = document.getElementsByClassName("lastname-error");

firstName.addEventListener("blur", (event) => {
  const usernameValue = event.target.value;
  const isValid = /^\D+/.test(usernameValue);
  if (!isValid) {
    firstNameError[0].classList.add("show");
    firstName.classList.add("invalid");
    firstName.classList.remove("valid");
  } else {
    firstNameError[0].classList.remove("show");
    firstName.classList.remove("invalid");
    firstName.classList.add("valid");
  }
});

lastName.addEventListener("blur", (event) => {
  const usernameValue = event.target.value;
  const isValid = /^\D+/.test(usernameValue);
  if (!isValid) {
    lastNameError[0].classList.add("show");
    lastName.classList.add("invalid");
    lastName.classList.remove("valid");
  } else {
    lastNameError[0].classList.remove("show");
    lastName.classList.remove("invalid");
    lastName.classList.add("valid");
  }
  //   if (isValid) console.log(event.target.value);
});

age.addEventListener("blur", (event) => {
  const ageValue = parseInt(event.target.value);
  const isValid = /^\d+$/.test(ageValue);
  if (!isValid) {
    ageError[0].classList.add("show");
    age.classList.add("invalid");
    age.classList.remove("valid");
  } else {
    ageError[0].classList.remove("show");
    age.classList.remove("invalid");
    age.classList.add("valid");
  }
});

form.addEventListener("submit", (event) => {
  if (
    !age.classList.contains("valid") ||
    !lastName.classList.contains("valid") ||
    !firstName.classList.contains("valid")
  ) {
    event.preventDefault();
  }
});

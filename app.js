const form = document.getElementById("signup-form");
const firstName = document.getElementById("signup-firstname");
const lastName = document.getElementById("signup-lastname");
const starSign = document.getElementById("starsign");
const firstNameError = document.getElementsByClassName("firstname-error");
const lastNameError = document.getElementsByClassName("lastname-error");

firstName.addEventListener("blur", (event) => {
  const usernameValue = event.target.value;
  const isValid = /^\D+/.test(usernameValue);
  if (!isValid) {
    firstNameError[0].classList.add("show");
    console.log(firstNameError[0]);
    firstName.classList.add("invalid");
    firstName.classList.remove("valid");
  } else {
    firstNameError[0].classList.remove("show");
    console.log(firstNameError[0]);
    firstName.classList.remove("invalid");
    firstName.classList.add("valid");
  }
});

lastName.addEventListener("blur", (event) => {
  const usernameValue = event.target.value;
  const isValid = /^\D+/.test(usernameValue);
  if (!isValid) {
    lastNameError[0].classList.add("show");
    console.log(lastNameError[0]);
    lastName.classList.add("invalid");
    lastName.classList.remove("valid");
  } else {
    lastNameError[0].classList.remove("show");
    console.log(lastNameError[0]);
    lastName.classList.remove("invalid");
    lastName.classList.add("valid");
  }
  //   if (isValid) console.log(event.target.value);
});

const form = document.getElementById("signup-form");
const firstName = document.getElementById("signup-firstname");
const lastName = document.getElementById("signup-lastname");
const error = document.getElementById("error");
const horoscope = document.getElementById("horoscope-div");

firstName.addEventListener("blur", (event) => {
  const usernameValue = event.target.value;
  const isValid = /^\D+/.test(usernameValue);
  if (!isValid) {
    error.innerText = "Please enter valid name";
    firstName.classList.add("invalid");
    firstName.classList.remove("valid");
  } else {
    error.innerText = "";
    firstName.classList.remove("invalid");
    firstName.classList.add("valid");
  }
});

lastName.addEventListener("blur", (event) => {
  const usernameValue = event.target.value;
  const isValid = /^\D+/.test(usernameValue);
  if (!isValid) {
    error.innerText = "Please enter valid name";
    lastName.classList.add("invalid");
    lastName.classList.remove("valid");
  } else {
    error.innerText = "";
    lastName.classList.remove("invalid");
    lastName.classList.add("valid");
  }
  //   if (isValid) console.log(event.target.value);
});

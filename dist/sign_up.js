const getSubmitBtn = document.querySelector("#submit");
const getEmail = document.querySelector("#email");
const getPassword = document.querySelector("#password");
const getUserName = document.querySelector("#name");
const passwordHelp = document.querySelector("#passwordHelp");
getSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const emailRegex = /.+@.+.\..+/;
  const digitRegex = /[0-9]/;
  const smallLetterRegex = /[a-z]/;
  const capsRegex = /[A-Z]/;
  const symbolRegex = /[!@#$%^&*(),.?":{}|_<>]/;
  let emailValue = getEmail.value;
  let passwordValue = getPassword.value;
  if (emailRegex.test(emailValue)) {
    getEmail.classList.remove("border-red-700");
  } else {
    getEmail.classList.add("border-red-700");
  }
  if (getUserName.value == "") {
    getUserName.classList.add("border-red-700");
  } else {
    getUserName.classList.remove("border-red-700");
  }
  if (
    digitRegex.test(passwordValue) &&
    smallLetterRegex.test(passwordValue) &&
    capsRegex.test(passwordValue) &&
    symbolRegex.test(passwordValue)
  ) {
    getPassword.classList.remove("border-red-700");
    passwordHelp.textContent = "";
  } else {
    getPassword.classList.add("border-red-700");
    passwordHelp.textContent =
      "Password must contain be 8 characters long consisting of at least one symbol, an uppercase, a lower case and a number";
  }
});

const getLoginForms = document.querySelector("loginAccountForm");
const getLoginFormsBtn = document.querySelector("")

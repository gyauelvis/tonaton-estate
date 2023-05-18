const getSubmitBtn = document.querySelector("#submit");
const getEmail = document.querySelector("#email");
const getPassword = document.querySelector("#password");
const getUserName = document.querySelector("#name");
const passwordHelp = document.querySelector("#passwordHelp");
const switchToCreateAcc = document.querySelector("#switchToCreateAcc");
const submitFxn = (e) => {
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
    e.preventDefault();
    getEmail.classList.add("border-red-700");
  }
  if (getUserName.value == "") {
    getUserName.classList.add("border-red-700");
  } else {
    e.preventDefault();
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
    e.preventDefault();
    getPassword.classList.add("border-red-700");
    passwordHelp.textContent =
      "Password must contain be 8 characters long consisting of at least one symbol, an uppercase, a lower case and a number";
  }
};
//Switching from Creating Acc to Login
const getCreateAccForms = document.querySelector("#createAccountForm");
const getLoginForms = document.querySelector("#loginAccountForm");
const getLoginFormsBtn = document.querySelector("#login");
getLoginFormsBtn.addEventListener("click", (e) => {
  getLoginForms.classList.replace("hidden", "flex");
  getCreateAccForms.classList.replace("flex", "hidden");
});

//Switching from Login to Creating Acc
switchToCreateAcc.addEventListener("click", (e) => {
  getLoginForms.classList.replace("flex", "hidden");
  getCreateAccForms.classList.replace("hidden", "flex");
});

getSubmitBtn.addEventListener("click", submitFxn);

// Hidding the login screen and showing the forget password screen
document.querySelector("#forgot_password").addEventListener("click", (e) => {
  e.preventDefault();
  getLoginForms.classList.replace("flex", "hidden");
  document
    .querySelector("#forget_password_window")
    .classList.replace("hidden", "flex");
});

document.querySelector("#sign_in").addEventListener("click", (e) => {
  e.preventDefault();
  getLoginForms.classList.replace("hidden", "flex");
  document
    .querySelector("#forget_password_window")
    .classList.replace("flex", "hidden");
});

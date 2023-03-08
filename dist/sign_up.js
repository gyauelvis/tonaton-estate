const getSubmitBtn = document.querySelector("#submit");
const getEmail = document.querySelector("#email");
const getPassword = document.querySelector("#password");
const getUserName = document.querySelector("#name");

getSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault;
  const emailRegex = /.+@.+.\..+/;
  const digitRegex = /[0-9]/;
  const smallLetterRegex = /[a-z]/;
  const capsRegex = /[A-Z]/;
  const symbolRegex = /[!@#$%^&*(),.?":{}|_<>]/;
  let emailValue = getEmail.value;
  console.log(emailValue);
  console.log(getEmail);
  if (emailRegex.test(emailValue)) {
    console.log("Pk");
  } else {
  
  }
});

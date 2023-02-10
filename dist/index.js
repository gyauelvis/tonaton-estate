let getRecommendedBtn = document.getElementById("filter");
let filterWindow = document.getElementById("filterWindow");
let windowStatus = false;
//Getting the filter window to pop up once the recommend button is clicked
let getFilterWindow = () => {
  if (windowStatus === false) {
    filterWindow.style.display = "flex";
    windowStatus = true;
    console.log(windowStatus);
    console.log(filterWindow.getBoundingClientRect());
  } else if (windowStatus === true) {
    filterWindow.style.display = "none";
    console.log(getComputedStyle(filterWindow).display);
    windowStatus = false;
  }
};
getRecommendedBtn.addEventListener("click", getFilterWindow);

// window.addEventListener("click", (e) => {
//   filterWindow.style.display = "none";
// });

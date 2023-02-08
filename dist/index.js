let getRecommendedBtn = document.getElementById("filter");
let filterWindow = document.getElementById("filterWindow");
let windowStatus = false;
let getFilterWindowWidth;
let getFilterWindowHeight;

console.log(getRecommendedBtn);
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

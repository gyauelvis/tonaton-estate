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

//Slide up when the price is clicked
let getpriceBtn = document.querySelector("#price");
let slideStat = false;
let priceFxn = (e) => {
  e.preventDefault;
  let getPriceMenu = document.getElementById("priceMenu");
  let getPriceIcon = document.getElementById("price-icon");
  if (slideStat === false) {
    getPriceMenu.classList.add("h-0", "invisible");
    getPriceIcon.classList.remove("-rotate-90");
    getPriceIcon.classList.add("rotate-90");
    slideStat = true;
  } else if (slideStat === true) {
    getPriceMenu.classList.remove("h-0", "invisible");
    getPriceIcon.classList.add("-rotate-90");
    getPriceIcon.classList.remove("rotate-90");
    console.log(slideStat);
    slideStat = false;
  }
  console.log(getPriceMenu);
};
getpriceBtn.addEventListener("click", priceFxn);

//Showing the previous and forward btn when the various property imgs are hovered
let getProperties = document.querySelectorAll("#properties");

getProperties.forEach((prop) => {
  prop.addEventListener("mouseover", (e) => {
    
  });
});

// let showIconFxn = (e) => {
//   let getPropForwardIcons = document.querySelectorAll("#propForw");
//   getPropForwardIcons.forEach((icon) => {
//     icon.classList.replace("hidden", "block");
//   });
//   let getPropPrevIcons = document.querySelectorAll("#propPrev");
//   getPropPrevIcons.forEach((icon) => {
//     icon.classList.replace("hidden", "block");
//   });
// };

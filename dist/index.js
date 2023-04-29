let getRecommendedBtn = document.getElementById("filter");
let filterWindow = document.getElementById("filterWindow");
let windowStatus = false;

//Getting the filter window to pop up once the recommend button is clicked
let getFilterWindow = () => {
  if (windowStatus === false) {
    filterWindow.classList.replace("hidden", "flex");
    windowStatus = true;
    console.log(windowStatus);
    console.log(filterWindow.getBoundingClientRect());
  } else if (windowStatus === true) {
    filterWindow.classList.replace("flex", "hidden");
    console.log(getComputedStyle(filterWindow).display);
    windowStatus = false;
  }
};
getRecommendedBtn.addEventListener("click", getFilterWindow);

//Slide up when the price is clicked
let getpriceBtns = document.querySelectorAll(".price");
let slideStat = false;
let priceFxn = (e) => {
  e.preventDefault();
  let getPriceMenu = document.getElementById("priceMenu");
  let getPriceIcon = document.getElementById("price-icon");
  if (slideStat === false) {
    getPriceMenu.classList.add("invisible");
    getPriceMenu.classList.replace("opacity-100", "opacity-0");
    getPriceMenu.classList.add("h-0");
    getPriceMenu.classList.replace("translate-y-0", "-translate-y-10");
    getPriceIcon.classList.remove("-rotate-90");
    getPriceIcon.classList.add("rotate-90");
    slideStat = true;
  } else if (slideStat === true) {
    getPriceMenu.classList.remove("invisible");
    getPriceMenu.classList.replace("opacity-0", "opacity-100");
    getPriceMenu.classList.remove("h-0");
    getPriceMenu.classList.replace("-translate-y-10", "translate-y-0");
    getPriceIcon.classList.add("-rotate-90");
    getPriceIcon.classList.remove("rotate-90");
    console.log(slideStat);
    slideStat = false;
  }
  console.log(getPriceMenu);
};
getpriceBtns.forEach((btn) => {
  btn.addEventListener("click", priceFxn);
});

//Getting the forward and previous icons to pop up once the image is hovered
let getProperties = document.querySelectorAll("#properties");
getProperties.forEach((prop) => {
  prop.addEventListener("mouseover", (e) => {
    prop.children[1].classList.replace("propPrev1", "propPrev2");
    prop.children[2].classList.replace("propForw1", "propForw2");
    let getPropForwardIcons = document.querySelectorAll("#propForw");
    getPropForwardIcons.forEach((icon) => {
      icon.classList.add("transition", "ease-in-out", "delay-300");
    });
  });
});
//Getting the forward and previous icons to go off once the image is not hovered
getProperties.forEach((prop) => {
  prop.addEventListener("mouseout", (e) => {
    prop.children[1].classList.replace("propPrev2", "propPrev1");
    prop.children[2].classList.replace("propForw2", "propForw1");
  });
});

//Working on the All filter Window

let closeFilter = document.querySelector("#allFilterClose");
let allFilterWindow = document.querySelector("#allFilterWindow");
let allFilterBtn = document.querySelector("#allFilterBtn");

//Popping the All Filter Window
allFilterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.add("fixed");
  allFilterWindow.classList.replace("invisible", "visible");
  allFilterWindow.classList.replace("h-0", "h-screen");

  allFilterWindow.classList.replace("opacity-0", "opacity-100");
  allFilterWindow.classList.replace("translate-y-full", "translate-y-0");
});
//Closing the All Filter Window

closeFilter.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.remove("fixed");
  allFilterWindow.classList.replace("visible", "invisible");
  allFilterWindow.classList.replace("h-screen", "h-0");
  allFilterWindow.classList.replace("opacity-100", "opacity-0");
  allFilterWindow.classList.replace("translate-y-0", "translate-y-full");
});

//Getting the price window to popUp on small screens
let priceBtn = document.querySelectorAll(".priceBtn");
let closePriceBtn = document.querySelector("#priceClose");

priceBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("body").classList.add("fixed");
    priceWindow.classList.replace("invisible", "visible");
    priceWindow.classList.replace("h-0", "h-screen");
    priceWindow.classList.replace("opacity-0", "opacity-100");
    priceWindow.classList.replace("translate-y-full", "translate-y-0");
  });
});

closePriceBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.remove("fixed");
  priceWindow.classList.replace("visible", "invisible");
  priceWindow.classList.replace("h-screen", "h-0");
  priceWindow.classList.replace("opacity-100", "opacity-0");
  priceWindow.classList.replace("translate-y-0", "translate-y-full");
});

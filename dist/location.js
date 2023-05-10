//Getting the location btn
let regionSec = document.getElementById("regions");
let getLocBtn = document.querySelectorAll(".location");
let getOverlay = document.querySelector("#overlay");
let regStatus = false;
let closeLoc = document.querySelector("#closeLoc");

//Getting the dark overlay to cover up the page when the location button is clicked

//Getting the window to popUp too
getLocBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("body").classList.add("fixed");
    regionSec.classList.replace("invisible", "visible");
    regionSec.classList.replace("opacity-0", "opacity-100");
    regionSec.classList.replace("md:min-h-0", "md:min-h-[90vh]");
    regionSec.classList.replace("translate-y-full", "translate-y-0");
    getOverlay.classList.replace("md:hidden", "md:block");
  });
});

// After the window pops up, whenever the overlay is clicked, the window show close
getOverlay.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("body").classList.remove("fixed");
  getOverlay.classList.replace("md:block", "md:hidden");
  // Checking if the single list has been popped up
  if (singleList.classList.contains("block")) {
    singleList.classList.replace("block", "hidden");
    singleList.classList.replace("lg:flex", "lg:hidden");
    document.querySelector("main").classList.remove("fixed");
    document.querySelector("footer").classList.remove("fixed");
    document.querySelector("nav").classList.replace("fixed", "sticky");
  }
  regionSec.classList.replace("visible", "invisible");
  regionSec.classList.replace("opacity-100", "opacity-0");
  regionSec.classList.replace("translate-y-0", "translate-y-full");
  regionSec.classList.replace("md:min-h-[90vh]", "md:min-h-0");
});

closeLoc.addEventListener("click", (e) => {
  document.querySelector("body").classList.remove("fixed");
  regionSec.classList.replace("visible", "invisible");
  regionSec.classList.replace("opacity-100", "opacity-0");
  regionSec.classList.replace("translate-y-0", "translate-y-full");
  regionSec.classList.replace("md:min-h-[90vh]", "md:min-h-0");
});

//Making searches using the search bar that pops up with the window when the location button is clicked

let searchBar = document.getElementById("locSearchBar");
searchBar.addEventListener("input", (e) => {
  let inputText = e.target.value.toLowerCase();
  let inputLenght = e.target.value.length;

  //Getting the available regions
  let regionLocations = document.querySelectorAll(".regionLoc");

  //The popular test beside the first 3 regions
  let popular = document.querySelector("#popular");

  let popularRegions = document.querySelector("#popular-regions");
  let regionDiv = document.querySelector("#regionDiv");
  let regionSec3 = document.querySelector("#region-Sec3");
  let firstLetters = document.querySelectorAll(".first-letter");

  regionLocations.forEach((location) => {
    if (inputLenght >= 3) {
      popular.classList.replace("flex", "hidden");
      popularRegions.classList.replace("-translate-x-[6.7rem]", "translate-0");
      regionDiv.classList.replace("md:flex-row", "md:flex-col");
      regionDiv.classList.add("px-5");
      regionSec3.classList.replace(
        "md:-translate-x-[6.7rem]",
        "md:translate-0"
      );
      regionSec3.classList.replace("md:mt-5", "md:mt-0");
      firstLetters.forEach((letter) =>
        letter.classList.replace("flex", "hidden")
      );

      if (location.textContent.toLowerCase().includes(inputText)) {
        location.classList.replace("hidden", "flex");
      } else {
        location.classList.replace("flex", "hidden");
      }
    } else {
      popular.classList.replace("hidden", "flex");
      popularRegions.classList.replace("translate-0", "-translate-x-[6.7rem]");
      regionDiv.classList.replace("md:flex-col", "md:flex-row");
      regionSec3.classList.replace(
        "md:translate-0",
        "md:-translate-x-[6.7rem]"
      );
      regionSec3.classList.replace("md:mt-0", "md:mt-5");
      firstLetters.forEach((letter) =>
        letter.classList.replace("hidden", "flex")
      );
      location.classList.replace("hidden", "flex");
      regionDiv.classList.remove("px-5");
    }
  });
});

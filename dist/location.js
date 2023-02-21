// const regionsInGhana = [
//   {
//     regionName: "Greater Accra",
//     capital: "Accra",
//     town1: "Tema",
//     town2: "Achimota",
//   },
//   {
//     regionName: "Ashanti Region",
//     capital: "Kumasi",
//     town1: "Obuasi",
//     town2: "Ejisu",
//   },
//   {
//     regionName: "Central Region",
//     capital: "Cape Coast",
//     town1: "Winneba",
//     town2: "Commenda",
//   },
//   {
//     regionName: "Brong Ahafo Region",
//     capital: "Sunyani",
//     town1: "Berekum",
//     town2: "Goaso",
//   },
//   {
//     regionName: "Western Region",
//     capital: "Takoradi",
//     town1: "Tarkwa",
//     town2: "Wiawso",
//   },
//   {
//     regionName: "Eastern Region",
//     capital: "Koforidua",
//     town1: "Aburi",
//     town2: "Kwau",
//   },
//   {
//     regionName: "Volta Region",
//     capital: "Ho",
//     town1: "Keta",
//     town2: "Hohoe",
//   },
//   {
//     regionName: "Northern Region",
//     capital: "Tamale",
//     town1: "Savelugu",
//     town2: "Bimbila",
//   },
//   {
//     regionName: "Eastern Region",
//     capital: "Koforidua",
//     town1: "Kade",
//     town2: "Aburi",
//   },
//   {
//     regionName: "Upper West Region",
//     capital: "Wa",
//     town1: "Nandom",
//     town2: "Jirapa",
//   },
//   {
//     regionName: "Upper East Region",
//     capital: "Bolgatanga",
//     town1: "Navrongo",
//     town2: "Bawku",
//   },
// ];
//Get the section the location pop-up window will be placed

//The fxn that show the regions when the window pops up
// const getRegions = (regionsInGhana) => {
//   regionsInGhana.forEach((region) => {
//     let buttonElement = document.createElement("button");
//     buttonElement.setAttribute("type", "button");
//     buttonElement.classList.add(
//       "regionElements",
//       "flex",
//       "flex-col",
//       "bg-white",
//       "justify-center",
//       "border-[0.01rem]",
//       "w-80",
//       "h-10",
//       "w-11/12",
//       "text-base",
//       "text-gray-900",
//       "px-4"
//     );
//     buttonElement.textContent = `${region.regionName} - ${region.capital}`;
//     regionSec.appendChild(buttonElement);
//   });
// };
// getRegions(regionsInGhana);

//Getting the location btn
let regionSec = document.getElementById("regions");
let getLocBtn = document.querySelector("#location");
let getOverlay = document.querySelector("#overlay");
let regStatus = false;

//Getting the dark overlay to cover up the page when the location button is clicked
//Getting the window to popUp too
getLocBtn.addEventListener("click", (e) => {
  e.preventDefault;
  document.querySelector("body").classList.add("fixed");
  regionSec.classList.replace("invisible", "visible");
  regionSec.classList.replace("opacity-0", "opacity-100");
  regionSec.classList.replace("min-h-0", "min-h-[90vh]");
  regionSec.classList.replace("translate-y-full", "translate-y-0");
  getOverlay.classList.replace("hidden", "block");
});

// After the window pops up, whenever the overlay is clicked, the window show close
getOverlay.addEventListener("click", (e) => {
  e.preventDefault;
  document.querySelector("body").classList.remove("fixed");
  getOverlay.classList.replace("block", "hidden");
  regionSec.classList.replace("visible", "invisible");
  regionSec.classList.replace("opacity-100", "opacity-0");
  regionSec.classList.replace("translate-y-0", "translate-y-full");
  regionSec.classList.replace("min-h-[90vh]", "min-h-0");
});

//Making searches using the search bar that pops up with the window when the location button is clicked

let searchBar = document.getElementById("locSearchBar");
searchBar.addEventListener("input", (e) => {
  let inputText = e.target.value.toLowerCase();
  let inputLenght = e.target.value.length;

  //Getting the available regions
  let locations = document.querySelectorAll(".location");

  //The popular test beside the first 3 regions
  let popular = document.querySelector("#popular");
  let popularRegions = document.querySelector("#popular-regions");
  let regionDiv = document.querySelector("#regionDiv");
  let regionSec3 = document.querySelector("#region-Sec3");
  let firstLetters = document.querySelectorAll(".first-letter");

  locations.forEach((location) => {
    if (inputLenght >= 3) {
      popular.classList.replace("flex", "hidden");
      popularRegions.classList.replace("-translate-x-[6.7rem]", "translate-0");
      regionDiv.classList.replace("flex-row", "flex-col");
      regionDiv.classList.add("px-5");
      regionSec3.classList.replace("-translate-x-[6.7rem]", "translate-0");
      regionSec3.classList.replace("mt-5", "mt-0");
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
      regionDiv.classList.replace("flex-col", "flex-row");
      regionSec3.classList.replace("translate-0", "-translate-x-[6.7rem]");
      regionSec3.classList.replace("mt-0", "mt-5");
      firstLetters.forEach((letter) =>
        letter.classList.replace("hidden", "flex")
      );
      location.classList.replace("hidden", "flex");
      regionDiv.classList.remove("px-5");
    }
  });
});

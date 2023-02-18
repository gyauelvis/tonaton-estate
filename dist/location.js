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
  regionSec.classList.remove("h-0");
  getOverlay.classList.replace("hidden", "block");
});

// After the window pops up, whenever the overlay is clicked, the window show close
getOverlay.addEventListener("click", (e) => {
  e.preventDefault;
  document.querySelector("body").classList.remove("fixed");
  getOverlay.classList.replace("block", "hidden");
  regionSec.classList.replace("visible", "invisible");
  regionSec.classList.add("h-0");
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
  let firstLetters = document.querySelectorAll(".first-letter");

  locations.forEach((location) => {
    // if (inputLenght >= 3) {
    // }

    if (location.textContent.toLowerCase().includes(inputText)) {
      //Check if location is visivle or not
      if (location.classList.contains("hidden")) {
        location.classList.replace("hidden", "flex");
      }
      popular.classList.replace("hidden", "flex");
    } else if (inputLenght >= 3) {
      if (location.classList.contains("flex")) {
        popular.classList.replace("flex", "hidden");
        location.classList.replace("flex", "hidden");
      }
    }
  });
});

// let getLocSearch = document.querySelector("#locationSearch");
// //What happens where the user begins to search for a particular location?
// getLocSearch.addEventListener("input", (e) => {
//   //classes to be added to the searches that appear
//   let popUpClasses = [
//     "regionElements",
//     "flex",
//     "flex-col",
//     "bg-blue-50",
//     "my-2",
//     "py-3",
//     "w-11/12",
//     "text-lg",
//     "text-gray-700",
//     "px-4",
//   ];
//   regionsInGhana.forEach((region) => {
//     if (e.target.value != "" && e.target.value != " ") {
//       // Get the regions that come up with the popUp when All Ghana is pressed
//       let getRegionElements = document.querySelectorAll(".regionElements");
//       //Check if any of the given values that is already on the screen do include the value the user has entered

//       getRegionElements.forEach((element) => {
//         if (
//           element.textContent.toLowerCase().includes(e.target.value) ||
//           element.textContent.toUpperCase().includes(e.target.value)
//         ) {
//         } else {
//           element.remove();
//         }
//       });

//       let town1AppendStat = false;
//       let town2AppendStat = false;
//       if (
//         region.town1.toLowerCase().includes(e.target.value) ||
//         region.town1.toUpperCase().includes(e.target.value)
//       ) {
//         document.querySelectorAll("button").forEach((btn) => {
//           if (btn.textContent === region.town1) {
//             town1AppendStat = true;
//           }
//         });
//         //Creating a button based on the search of the user
//         let town1sec = document.createElement("div");
//         town1sec.id = "town1";
//         regionSec.appendChild(town1sec);
//         let btnElement;
//         if (town1AppendStat === false) {
//           btnElement = document.createElement("button");
//           btnElement.textContent = region.town1;
//           regionSec.appendChild(btnElement);
//         }
//       } else if (
//         region.town2.toLowerCase().includes(e.target.value) ||
//         region.town2.toUpperCase().includes(e.target.value)
//       ) {
//         document.querySelectorAll("button").forEach((btn) => {
//           if (btn.textContent === region.town2) {
//             town2AppendStat = true;
//           }
//         });
//         //Creating a button based on the search of the user
//         let town2sec = document.createElement("div");
//         town2sec.id = "town1";
//         regionSec.appendChild(town2sec);
//         let btnElement;
//         if (town2AppendStat === false) {
//           btnElement = document.createElement("button");
//           btnElement.textContent = region.town2;
//           regionSec.appendChild(btnElement);
//         }
//       }
//     }
//   });
// });

// Object that contains info about the various properties
let PropertiesOnPage = {
  prop1: [
    "./img/houses (1).jpg",
    "Tsopoli Greater Accra, Ghana",
    "5-Bedrooms",
    "GH¢ 15,0432",
  ],
  prop2: [
    "./img/houses (2).jpg",
    "Dansoman, Greater Accra - Ghana",
    "3-Bedrooms",
    "GH¢ 15,0432",
  ],
  prop3: [
    "./img/houses (1).jpg",
    "Oyarifa Greater Accra - Ghana",
    "5-Bedrooms",
    "GH¢ 15,0432",
  ],
  prop4: [
    "./img/houses (4).jpg",
    "Techiman Brong Ahafo - Ghana",
    "6-Bedrooms",
    "GH¢ 15,0432",
  ],
  prop5: [
    "./img/houses (5).jpg",
    "Kumasi, Ashanti region - Ghana",
    "4-Bedrooms",
    "GH¢ 15,0432",
  ],
  prop6: [
    "./img/houses (6).jpg",
    "Koforidua, Eastern - Ghana",
    "2-Bedrooms",
    "GH¢ 15,0432",
  ],
};

const sellingProperties = document.querySelectorAll(
  "#sellingProperties button"
);
const singleList = document.querySelector("#singleList");
const closeSingleListOnSmallScreens =
  document.querySelector("#closeSingleList");
const singlePropertyImg = document.querySelector("#singlePropertyImg");
const numberOfBedrooms = document.querySelector("#numberOfBedRooms");
const locationOfProperty = document.querySelector("#locationOfProperty");
const costOfProperty = document.querySelector("#costOfProperty");
const titleOfProp = document.querySelector("#titleOfProp");
let getSingleList = (propNo) => {
  singlePropertyImg.src = PropertiesOnPage[propNo][0];
  numberOfBedrooms.textContent = PropertiesOnPage[propNo][2];
  locationOfProperty.textContent = PropertiesOnPage[propNo][1];
  costOfProperty.textContent = PropertiesOnPage[propNo][3];
  titleOfProp.textContent = `${PropertiesOnPage[propNo][2]} in ${PropertiesOnPage[propNo][1]}`;
  getOverlay.classList.replace("md:hidden", "md:block");
  singleList.classList.replace("hidden", "block");
  singleList.classList.replace("lg:hidden", "lg:flex");
  document.querySelector("main").classList.add("fixed");
  document.querySelector("footer").classList.add("fixed");
  document.querySelector("nav").classList.replace("sticky", "fixed");
};

//Closing the single list on smaller devices
const closeSingleList = document.querySelector("#closeSingleList");
closeSingleList.addEventListener("click", (e) => {
  singleList.classList.replace("block", "hidden");
  singleList.classList.replace("lg:flex", "lg:hidden");
  document.querySelector("main").classList.remove("fixed");
  document.querySelector("footer").classList.remove("fixed");
  document.querySelector("nav").classList.replace("fixed", "sticky");
  getOverlay.classList.replace("md:block", "md:hidden");
});

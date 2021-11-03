import {
  getWeatherData,
  getImageData,
  convertKelvinToCelsius,
  convertCelsiusToFarenheit,
} from "./app";

import Darkmode from "darkmode-js";

new Darkmode().showWidget();

const section = document.querySelector("section");
const form = document.querySelector("form");
const searchBox = document.querySelector("input");
const dataErrorMessage = document.querySelector(".error");
const inputErrorMessage = document.getElementById("input-error");

function showFormInputError() {
  if (searchBox.validity.patternMismatch) {
    inputErrorMessage.textContent = "Numbers and symbols are not supported!";
  }
  if (searchBox.validity.valueMissing) {
    inputErrorMessage.textContent = "Please enter location";
  }
}

async function renderTextualData() {
  try {
    const data = await getWeatherData();
    const mainContainer = document.createElement("div");
    const titleH = document.createElement("h3");
    const countryIcon = document.createElement("img");
    const tempContainer = document.createElement("menu");
    const descContainer = document.createElement("menu");
    const detailedDescContainer = document.createElement("menu");
    const temperaturePara = document.createElement("p");
    const descriptionPara = document.createElement("p");
    const detailedDescriptionPara = document.createElement("p");
    const tempParaIcon = document.createElement("span");
    const tempDescIcon = document.createElement("span");
    const tempDetailedDescIcon = document.createElement("span");
    const toggleTempBtn = document.createElement("button");
    const isConvertedTemptoCelsius = convertKelvinToCelsius(data.main.temp);
    const isConvertedTempToFarenheit = convertCelsiusToFarenheit(
      isConvertedTemptoCelsius
    );
    const countryIconSrc = `${data.sys.country}`.toLowerCase();

    mainContainer.setAttribute("class", "main-container");
    titleH.textContent = data.name;
    temperaturePara.textContent = `${isConvertedTemptoCelsius}  °C`;
    descriptionPara.textContent = data.weather[0].main;
    detailedDescriptionPara.textContent = data.weather[0].description;

    tempParaIcon.className = "material-icons";
    tempDescIcon.className = "material-icons";
    tempDetailedDescIcon.className = "material-icons";
    countryIcon.src = `https://flagcdn.com/32x24/${countryIconSrc}.png`;
    toggleTempBtn.textContent = `°F`;
    tempParaIcon.textContent = "thermostat";
    tempDetailedDescIcon.textContent = "info";
    switch (data.weather[0].main) {
      case "Clear":
        tempDescIcon.textContent = "wb_sunny";
        break;
      case "Clouds":
        tempDescIcon.textContent = "cloud";
        break;
      case "Rain":
        tempDescIcon.textContent = "water_drop";
        break;
      case "Storm":
        tempDescIcon.textContent = "flash_on";
        break;
      default:
        tempDescIcon.textContent = "filter_drama";
    }

    toggleTempBtn.addEventListener("click", () => {
      temperaturePara.classList.toggle("changed");
      temperaturePara.className === "changed"
        ? (temperaturePara.textContent = `${isConvertedTempToFarenheit} °F`)
        : (temperaturePara.textContent = `${isConvertedTemptoCelsius}  °C`);

      if (temperaturePara.textContent.includes("C")) {
        toggleTempBtn.textContent = "°F";
      } else if (temperaturePara.textContent.includes("F")) {
        toggleTempBtn.textContent = `°C`;
      }
    });

    tempContainer.appendChild(temperaturePara);
    tempContainer.appendChild(tempParaIcon);
    descContainer.appendChild(descriptionPara);
    descContainer.appendChild(tempDescIcon);
    detailedDescContainer.appendChild(detailedDescriptionPara);
    detailedDescContainer.appendChild(tempDetailedDescIcon);
    titleH.appendChild(countryIcon);
    titleH.appendChild(toggleTempBtn);
    mainContainer.appendChild(titleH);
    mainContainer.appendChild(tempContainer);
    mainContainer.appendChild(descContainer);
    mainContainer.appendChild(detailedDescContainer);
    section.appendChild(mainContainer);
  } catch (err) {
    dataErrorMessage.textContent = "Location not found!";

    setTimeout(() => {
      dataErrorMessage.textContent = "";
    }, 2000);
  }
}

async function renderImageData() {
  const imgBorder = document.createElement("div");
  const img = document.createElement("img");
  imgBorder.setAttribute("class", "image-container");
  imgBorder.appendChild(img);
  section.appendChild(imgBorder);
  try {
    const data = await getImageData();
    img.src = await data.data.images.fixed_width.url;
    imgBorder.style.backgroundImage = `url("${img.src}")`;
  } catch (err) {
    imgBorder.textContent = "Couldn't find image!";
    setTimeout(() => {
      imgBorder.remove();
    }, 2000);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchBox.validity.valid) {
    renderImageData();
    renderTextualData();
    inputErrorMessage.textContent = "";
  } else {
    showFormInputError();
  }
});

searchBox.addEventListener("input", () => {
  if (searchBox.validity.valid) {
    inputErrorMessage.textContent = "";
  } else {
    showFormInputError();
  }
});

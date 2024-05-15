//recompensas def
const cardsPosition = document.getElementById("recompensas-card-div");
const slideLeftBtn = document.getElementById("slide-left");
const slideRightBtn = document.getElementById("slide-right");
const sliderBar = document.getElementById("slider-progress-bar");
const sliderContainer = document.getElementById("slider-progress");

// footer def
const regionButton = document.getElementById("region");
const regionMenu = document.getElementById("region-menu");
const languageButton = document.getElementById("language");
const languageMenu = document.getElementById("language-menu");
const chevronRegion = document.getElementById("chevron-region");
const chevronLanguage = document.getElementById("chevron-language");

//recompensas fnc

function seeMoreCards() {
  if (cardsPosition.className == "recompensas-animation rec-first-position") {
    cardsPosition.classList.replace(
      "rec-first-position",
      "rec-second-position"
    );
    sliderContainer.style.justifyContent = "center";
    slideLeftBtn.classList.replace("slide-disabled", "slide-enabled")
  } else if (
    cardsPosition.className == "recompensas-animation rec-second-position"
  ) {
    cardsPosition.classList.replace(
      "rec-second-position",
      "rec-third-position"
    );
    sliderContainer.style.justifyContent = "flex-end";
    slideRightBtn.classList.replace("slide-enabled", "slide-disabled")

  }

  
}

function seeLessCards() {
  if (cardsPosition.className == "recompensas-animation rec-second-position") {
    cardsPosition.classList.replace(
      "rec-second-position",
      "rec-first-position"
    );
    sliderContainer.style.justifyContent = "flex-start";
    slideLeftBtn.classList.replace("slide-enabled", "slide-disabled")
  
  } else if (
    cardsPosition.className == "recompensas-animation rec-third-position"
  ) {
    cardsPosition.classList.replace(
      "rec-third-position",
      "rec-second-position"
    );
    sliderContainer.style.justifyContent = "center";
    slideRightBtn.classList.replace("slide-disabled", "slide-enabled")
  }
}

slideRightBtn.addEventListener("click", seeMoreCards);
slideLeftBtn.addEventListener("click", seeLessCards);

//footer fnc
function showRegionClass() {
  regionMenu.classList.toggle("region-visible");
}
function changeRegionChevron() {
  if (chevronRegion.className === "fa-solid fa-chevron-down") {
    chevronRegion.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else if (chevronRegion.className === "fa-solid fa-chevron-up") {
    chevronRegion.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

function showLanguageClass() {
  languageMenu.classList.toggle("language-visible");
}
function changeLanguageChevron() {
  if (chevronLanguage.className === "fa-solid fa-chevron-down") {
    chevronLanguage.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else if (chevronLanguage.className === "fa-solid fa-chevron-up") {
    chevronLanguage.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}
regionButton.addEventListener("click", showRegionClass);
regionButton.addEventListener("click", changeRegionChevron);

languageButton.addEventListener("click", showLanguageClass);
languageButton.addEventListener("click", changeLanguageChevron);

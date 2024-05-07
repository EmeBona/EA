const regionButton = document.getElementById("region");
const regionMenu = document.getElementById("region-menu");
const languageButton = document.getElementById("language");
const languageMenu =  document.getElementById("language-menu");

function showLanguageClass(){
    languageMenu.classList.toggle("language-visible")
}

function showRegionClass(){
    regionMenu.classList.toggle("region-visible")
}
// languageButton.addEventListener("mouseover", changeLanguageClass() )
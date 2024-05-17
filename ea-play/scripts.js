const gamesButton = document.getElementById("header-games-btn");
const gamesMenu = document.getElementById("header-games-menu");

function showGamesClass (){
    gamesMenu.classList.toggle("games-visible")
}

function changeGamesChevron(){
    if(chevronGames.className === "fa-solid fa-chevron-down"){
        chevronGames.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronGames.className === "fa-solid fa-chevron-up"){
        chevronGames.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}

gamesButton.addEventListener("click", showGamesClass);
gamesButton.addEventListener("click", changeGamesChevron);

const regionButton = document.getElementById("region");
const regionMenu = document.getElementById("region-menu");
const languageButton = document.getElementById("language");
const languageMenu =  document.getElementById("language-menu");
const chevronRegion = document.getElementById("chevron-region")
const chevronLanguage = document.getElementById("chevron-language")



function showRegionClass(){
    regionMenu.classList.toggle("region-visible")
}
function changeRegionChevron(){
    if(chevronRegion.className === "fa-solid fa-chevron-down"){
        chevronRegion.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronRegion.className === "fa-solid fa-chevron-up"){
        chevronRegion.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}

function showLanguageClass(){
    languageMenu.classList.toggle("language-visible")
}
function changeLanguageChevron(){
    if(chevronLanguage.className === "fa-solid fa-chevron-down"){
        chevronLanguage.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronLanguage.className === "fa-solid fa-chevron-up"){
        chevronLanguage.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}
regionButton.addEventListener("click", showRegionClass)
regionButton.addEventListener("click", changeRegionChevron)

languageButton.addEventListener("click", showLanguageClass)
languageButton.addEventListener("click", changeLanguageChevron)
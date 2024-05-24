const gamesButton = document.getElementById("header-games-btn");
const gamesMenu = document.getElementById("header-games-menu");
const experiencesButton = document.getElementById("header-experiences-btn");
const experiencesMenu = document.getElementById("header-experiences-menu");
const aboutButton = document.getElementById("header-about-btn");
const aboutMenu = document.getElementById("header-about-menu");
const commitmentsButton = document.getElementById("header-commitments-btn");
const commitmentsMenu = document.getElementById("header-commitments-menu");
const resourcesButton = document.getElementById("header-resources-btn");
const resourcesMenu = document.getElementById("header-resources-menu");
const hamburguerButton = document.getElementById("hamburguer-button");
const hamburguerMenu = document.getElementById("hamburguer-menu");
const chevronGames = document.getElementById("chevron-games");
const chevronExperiences = document.getElementById("chevron-experiences");
const chevronAbout = document.getElementById("chevron-about");
const chevronCommitments = document.getElementById("chevron-commitments");
const chevronResources = document.getElementById("chevron-resources");

const regionButton = document.getElementById("region");
const regionMenu = document.getElementById("region-menu");
const languageButton = document.getElementById("language");
const languageMenu =  document.getElementById("language-menu");
const chevronRegion = document.getElementById("chevron-region")
const chevronLanguage = document.getElementById("chevron-language")

const newsButton = document.getElementById("ea-news-button")
const newsVisibilitySection = document.getElementById("news-section")

const eaSportsButton = document.getElementById("ea-sports-button")
const eaSportsVisibilitySection = document.getElementById("ea-sports-section")

const starWarsButton = document.getElementById("star-wars-button")
const starWarsVisibilitySection = document.getElementById("star-wars-section")

const apexLegendsButton = document.getElementById("apex-legends-button")
const apexVisibilitySection = document.getElementById("apex-section")

const simsButton = document.getElementById("los-sims-button")
const simsVisibilitySection = document.getElementById("los-sims-section")

const f1Button = document.getElementById("f1-button")
const f1VisibilitySection = document.getElementById("f1-section")

const battlefieldButton = document.getElementById("battlefield-button")
const battlefieldVisibilitySection = document.getElementById("battlefield-section")

const footerPosition = document.getElementById("footer-id")

function newsButtonVisibility () {
    if (newsVisibilitySection.className === "ea-home-updates-cards-hidden") {
        newsVisibilitySection.classList.replace("ea-home-updates-cards-hidden", "ea-home-updates-cards-visible")
        eaSportsVisibilitySection.classList.replace("ea-sports-fc-menu-visible","ea-sports-fc-menu-hidden")
        starWarsVisibilitySection.classList.replace("star-wars-cards-menu-visible", "star-wars-cards-menu-hidden")
        apexVisibilitySection.classList.replace("apex-legends-cards-menu-visible","apex-legends-cards-menu-hidden")
        simsVisibilitySection.classList.replace("los-sims-cards-menu-visible","los-sims-cards-menu-hidden")
        f1VisibilitySection.classList.replace("f1-cards-menu-visible","f1-cards-menu-hidden")
        battlefieldVisibilitySection.classList.replace("battlefield-cards-menu-visible", "battlefield-cards-menu-hidden")
        footerPosition.classList.replace("footer-position","footer-regular")
    }
}
function sportsButtonVisibility () {
    if (eaSportsVisibilitySection.className === "ea-sports-fc-menu-hidden" ) {
        eaSportsVisibilitySection.classList.replace("ea-sports-fc-menu-hidden","ea-sports-fc-menu-visible")
        newsVisibilitySection.classList.replace("ea-home-updates-cards-visible", "ea-home-updates-cards-hidden")
        starWarsVisibilitySection.classList.replace("star-wars-cards-menu-visible", "star-wars-cards-menu-hidden")
        apexVisibilitySection.classList.replace("apex-legends-cards-menu-visible","apex-legends-cards-menu-hidden")
        simsVisibilitySection.classList.replace("los-sims-cards-menu-visible","los-sims-cards-menu-hidden")
        battlefieldVisibilitySection.classList.replace("battlefield-cards-menu-visible", "battlefield-cards-menu-hidden")       
        f1VisibilitySection.classList.replace("f1-cards-menu-visible","f1-cards-menu-hidden")
        footerPosition.classList.replace("footer-regular","footer-position")
        
    }
}
function starWarsButtonVisibility () {
    if (starWarsVisibilitySection.className === "star-wars-cards-menu-hidden") {
        starWarsVisibilitySection.classList.replace("star-wars-cards-menu-hidden", "star-wars-cards-menu-visible")
        eaSportsVisibilitySection.classList.replace("ea-sports-fc-menu-visible","ea-sports-fc-menu-hidden")
        newsVisibilitySection.classList.replace("ea-home-updates-cards-visible", "ea-home-updates-cards-hidden")
        apexVisibilitySection.classList.replace("apex-legends-cards-menu-visible","apex-legends-cards-menu-hidden")
        simsVisibilitySection.classList.replace("los-sims-cards-menu-visible","los-sims-cards-menu-hidden")
        battlefieldVisibilitySection.classList.replace("battlefield-cards-menu-visible", "battlefield-cards-menu-hidden")
        f1VisibilitySection.classList.replace("f1-cards-menu-visible","f1-cards-menu-hidden")
        footerPosition.classList.replace("footer-position","footer-regular")
    }
}
function apexButtonVisibility () {
    if (apexVisibilitySection.className === "apex-legends-cards-menu-hidden") {
        apexVisibilitySection.classList.replace("apex-legends-cards-menu-hidden","apex-legends-cards-menu-visible")
        eaSportsVisibilitySection.classList.replace("ea-sports-fc-menu-visible","ea-sports-fc-menu-hidden")
        starWarsVisibilitySection.classList.replace("star-wars-cards-menu-visible", "star-wars-cards-menu-hidden")
        newsVisibilitySection.classList.replace("ea-home-updates-cards-visible", "ea-home-updates-cards-hidden")
        simsVisibilitySection.classList.replace("los-sims-cards-menu-visible","los-sims-cards-menu-hidden")
        battlefieldVisibilitySection.classList.replace("battlefield-cards-menu-visible", "battlefield-cards-menu-hidden")
        f1VisibilitySection.classList.replace("f1-cards-menu-visible","f1-cards-menu-hidden")
        footerPosition.classList.replace("footer-position","footer-regular")
    }
}
function simsVisibilityButton () {
    if (simsVisibilitySection.className === "los-sims-cards-menu-hidden") {
        simsVisibilitySection.classList.replace("los-sims-cards-menu-hidden","los-sims-cards-menu-visible")
        eaSportsVisibilitySection.classList.replace("ea-sports-fc-menu-visible","ea-sports-fc-menu-hidden")
        starWarsVisibilitySection.classList.replace("star-wars-cards-menu-visible", "star-wars-cards-menu-hidden")
        newsVisibilitySection.classList.replace("ea-home-updates-cards-visible", "ea-home-updates-cards-hidden")
        apexVisibilitySection.classList.replace("apex-legends-cards-menu-visible","apex-legends-cards-menu-hidden")
        f1VisibilitySection.classList.replace("f1-cards-menu-visible","f1-cards-menu-hidden")
        battlefieldVisibilitySection.classList.replace("battlefield-cards-menu-visible", "battlefield-cards-menu-hidden")
        footerPosition.classList.replace("footer-position","footer-regular")
    }
}
function f1VisibilityButton () {
    if (f1VisibilitySection.className === "f1-cards-menu-hidden") {
        f1VisibilitySection.classList.replace("f1-cards-menu-hidden","f1-cards-menu-visible")
        eaSportsVisibilitySection.classList.replace("ea-sports-fc-menu-visible","ea-sports-fc-menu-hidden")
        starWarsVisibilitySection.classList.replace("star-wars-cards-menu-visible", "star-wars-cards-menu-hidden")
        newsVisibilitySection.classList.replace("ea-home-updates-cards-visible", "ea-home-updates-cards-hidden")
        apexVisibilitySection.classList.replace("apex-legends-cards-menu-visible","apex-legends-cards-menu-hidden")
        simsVisibilitySection.classList.replace("los-sims-cards-menu-visible","los-sims-cards-menu-hidden")
        battlefieldVisibilitySection.classList.replace("battlefield-cards-menu-visible", "battlefield-cards-menu-hidden")
        footerPosition.classList.replace("footer-position","footer-regular")

    }
}
function battlefieldButtonVisibility () {
    if (battlefieldVisibilitySection.className === "battlefield-cards-menu-hidden") {
        battlefieldVisibilitySection.classList.replace("battlefield-cards-menu-hidden", "battlefield-cards-menu-visible")
        eaSportsVisibilitySection.classList.replace("ea-sports-fc-menu-visible","ea-sports-fc-menu-hidden")
        starWarsVisibilitySection.classList.replace("star-wars-cards-menu-visible", "star-wars-cards-menu-hidden")
        newsVisibilitySection.classList.replace("ea-home-updates-cards-visible", "ea-home-updates-cards-hidden")
        apexVisibilitySection.classList.replace("apex-legends-cards-menu-visible","apex-legends-cards-menu-hidden")
        simsVisibilitySection.classList.replace("los-sims-cards-menu-visible","los-sims-cards-menu-hidden")
        f1VisibilitySection.classList.replace("f1-cards-menu-visible","f1-cards-menu-hidden")
        footerPosition.classList.replace("footer-position","footer-regular")

    }
}
newsButton.addEventListener("click",newsButtonVisibility)
eaSportsButton.addEventListener("click",sportsButtonVisibility)
starWarsButton.addEventListener("click", starWarsButtonVisibility)
apexLegendsButton.addEventListener("click", apexButtonVisibility)
simsButton.addEventListener("click", simsVisibilityButton)
f1Button.addEventListener("click", f1VisibilityButton)
battlefieldButton.addEventListener("click", battlefieldButtonVisibility)

function showHamburguerClass (){
    hamburguerMenu.classList.toggle("hamburguer-visible")
}

function showGamesClass (){
    gamesMenu.classList.toggle("games-visible")
}

function showExperiencesClass (){
    experiencesMenu.classList.toggle("experiences-visible")
}

function showAboutClass (){
    aboutMenu.classList.toggle("about-visible")
}

function showCommitmentsClass (){
    commitmentsMenu.classList.toggle("commitments-visible")
}

function showResourcesClass (){
    resourcesMenu.classList.toggle("resources-visible")
}

function changeGamesChevron(){
    if(chevronGames.className === "fa-solid fa-chevron-down"){
        chevronGames.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronGames.className === "fa-solid fa-chevron-up"){
        chevronGames.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}

function changeExperiencesChevron(){
    if(chevronExperiences.className === "fa-solid fa-chevron-down"){
        chevronExperiences.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronExperiences.className === "fa-solid fa-chevron-up"){
        chevronExperiences.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}

function changeAboutChevron(){
    if(chevronAbout.className === "fa-solid fa-chevron-down"){
        chevronAbout.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronAbout.className === "fa-solid fa-chevron-up"){
        chevronAbout.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}

function changeCommitmentsChevron(){
    if(chevronCommitments.className === "fa-solid fa-chevron-down"){
        chevronCommitments.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronCommitments.className === "fa-solid fa-chevron-up"){
        chevronCommitments.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}

function changeResourcesChevron(){
    if(chevronResources.className === "fa-solid fa-chevron-down"){
        chevronResources.classList.replace("fa-chevron-down", "fa-chevron-up")
    } else if (chevronResources.className === "fa-solid fa-chevron-up"){
        chevronResources.classList.replace("fa-chevron-up", "fa-chevron-down")
    }
    
}

newsButton.addEventListener("click", visibilityNews)

hamburguerButton.addEventListener("click", showHamburguerClass);

gamesButton.addEventListener("click", showGamesClass);
gamesButton.addEventListener("click", changeGamesChevron);

experiencesButton.addEventListener("click", showExperiencesClass);
experiencesButton.addEventListener("click", changeExperiencesChevron);

aboutButton.addEventListener("click", showAboutClass);
aboutButton.addEventListener("click", changeAboutChevron);

commitmentsButton.addEventListener("click", showCommitmentsClass);
commitmentsButton.addEventListener("click", changeCommitmentsChevron);

resourcesButton.addEventListener("click", showResourcesClass);
resourcesButton.addEventListener("click", changeResourcesChevron);

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
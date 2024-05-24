// nav def
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

//nav fnc
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
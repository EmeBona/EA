//nav fnc
document.addEventListener("DOMContentLoaded", function() {
    const hamburguerButton = document.getElementById("hamburguer-button");
    const hamburguerMenu = document.getElementById("hamburguer-menu");
    const menuOverlay = document.getElementById("menu-overlay");
    const closeIcon = document.querySelector(".close-icon");
  
    function toggleMenu() {
      hamburguerMenu.classList.toggle("hamburguer-visible");
      menuOverlay.classList.toggle("menu-overlay-visible");
      document.body.classList.toggle("no-scroll"); 
    }
  
    hamburguerButton.addEventListener("click", function(event) {
      event.stopPropagation(); 
      toggleMenu();
    });
  
    document.addEventListener("click", function(event) {
      if (!hamburguerMenu.contains(event.target) && event.target !== hamburguerButton) {
        hamburguerMenu.classList.remove("hamburguer-visible");
        menuOverlay.classList.remove("menu-overlay-visible");
        document.body.classList.remove("no-scroll"); 
      }
    });
  
    closeIcon.addEventListener("click", function(event) {
      event.stopPropagation(); 
      toggleMenu();
    });
  
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        hamburguerMenu.classList.remove("hamburguer-visible");
        menuOverlay.classList.remove("menu-overlay-visible");
        document.body.classList.remove("no-scroll"); 
      }
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = [
      { button: 'header-games-btn', menu: 'header-games-menu', visibleClass: 'games-visible', chevron: 'chevron-games' },
      { button: 'header-experiences-btn', menu: 'header-experiences-menu', visibleClass: 'experiences-visible', chevron: 'chevron-experiences' },
      { button: 'header-about-btn', menu: 'header-about-menu', visibleClass: 'about-visible', chevron: 'chevron-about' },
      { button: 'header-commitments-btn', menu: 'header-commitments-menu', visibleClass: 'commitments-visible', chevron: 'chevron-commitments' },
      { button: 'header-resources-btn', menu: 'header-resources-menu', visibleClass: 'resources-visible', chevron: 'chevron-resources' }
    ];
  
    dropdowns.forEach(({ button, menu, visibleClass, chevron }) => {
      const buttonElement = document.getElementById(button);
      const menuElement = document.getElementById(menu);
      const chevronElement = document.getElementById(chevron);
  
      let timeout;
  
      const showMenu = () => {
        clearTimeout(timeout);
        menuElement.classList.add(visibleClass);
        chevronElement.classList.remove('fa-chevron-down');
        chevronElement.classList.add('fa-chevron-up');
      };
  
      const hideMenu = () => {
        timeout = setTimeout(() => {
          menuElement.classList.remove(visibleClass);
          chevronElement.classList.remove('fa-chevron-up');
          chevronElement.classList.add('fa-chevron-down');
        }, 200); 
      };
  
      buttonElement.addEventListener('mouseenter', showMenu);
      buttonElement.addEventListener('mouseleave', hideMenu);
      menuElement.addEventListener('mouseenter', showMenu);
      menuElement.addEventListener('mouseleave', hideMenu);
    });
  });

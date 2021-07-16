/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
console.log(sections[0]);
const navBarUl = document.querySelector('ul');
console.log(navBarUl);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function navBarItem(item) {
    sections.forEach(function (section){
        const navBarLi = document.createElement('li');
        navBarLi.innerHTML = `<a href="#${section.id}" class="menu__link">${section.getAttribute('id')}</a>`;
        item.appendChild(navBarLi);
    });
};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navBarItem(navBarUl)
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



import './style.css';
import pageLoader from './pageLoader.js';
import './pageDestroyer.js';

// initial creation of the page
pageLoader.loadPage();

// handles all the method calls for the switching of tabs
function navController(click) {
    pageLoader.activateTab(click);
}

// event listeners for the nav buttons
const buttons = document.querySelectorAll('.header > button');
buttons.forEach(button => button.addEventListener('click', navController))

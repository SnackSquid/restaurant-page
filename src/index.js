import './style.css';
import pageLoader from './modules/pageLoader.js';
import pageDestroyer from './modules/pageDestroyer.js';
import contentController from './modules/contentController.js'

// initial creation of the page
pageLoader.loadPage();
contentController.setImage('home');
contentController.setText('content', 'home');

// handles all the method calls for the switching of tabs
function navController(click) {
    pageLoader.activateTab(click);
    contentController.setImage(this.id);
}

// event listeners for the nav buttons
const buttons = document.querySelectorAll('.header > button');
buttons.forEach(button => button.addEventListener('click', navController))

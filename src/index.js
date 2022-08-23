import './style.css';
import pageLoader from './pageLoader.js';
import './pageDestroyer.js';

pageLoader.loadPage();

function navController(click) {
    pageLoader.activateTab(click);
}


const buttons = document.querySelectorAll('.header > button');
buttons.forEach(button => button.addEventListener('click', navController))

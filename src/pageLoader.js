const pageLoader = (() => {
    const classDiv = (divClass, parentClass) => {
        const parent = document.querySelector(parentClass);
        const div = document.createElement('div');
        div.classList.add(divClass);
        parent.appendChild(div);
    }

    const navButtons = (id, parentClass) => {
        const parent = document.querySelector(parentClass);
        const button = document.createElement('button');
        button.id = id;
        button.classList.add('tab');
        const buttonText = id.charAt(0).toUpperCase() + id.slice(1);
        button.textContent = buttonText;
        parent.appendChild(button);
    }

    const loadPage = () => {
        // load the main page
        pageLoader.classDiv('header', '#main')
        pageLoader.classDiv('leftSide', '#main')
        pageLoader.classDiv('content', '#main')
        pageLoader.classDiv('rightSide', '#main')
        pageLoader.classDiv('footer', '#main')
        // add the navigation buttons to the header
        pageLoader.navButtons('home', '.header');
        pageLoader.navButtons('menu','.header');
        pageLoader.navButtons('about', '.header');
        const homeButton = document.querySelector('#home');
        homeButton.classList.add('activeTab');
    }

    const activateTab = (click) => {
        click.stopPropagation();
        const buttons = document.querySelectorAll('.header > button');
        buttons.forEach(button => button.classList.remove('activeTab'))
        const activeTab = document.querySelector(`#${click.currentTarget.id}`);
        activeTab.classList.add('activeTab');
    }

    return { classDiv, loadPage, navButtons, activateTab }
})();

export default pageLoader;
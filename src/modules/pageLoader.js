const pageLoader = (() => {
    
    const makeDiv = (divClass, parentClass) => {
        const parent = document.querySelector(parentClass);
        const div = document.createElement('div');
        div.classList.add(divClass);
        parent.appendChild(div);
    }

    const makeIMG = (imageID, parentClass) => {
        const parent = document.querySelector(parentClass);
        const image = document.createElement('img');
        image.id = imageID;
        parent.appendChild(image);
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


    const activateTab = (click) => {
        click.stopPropagation();
        const buttons = document.querySelectorAll('.header > button');
        const tabID = click.currentTarget.id;
        buttons.forEach(button => button.classList.remove('activeTab'))
        const activeTab = document.querySelector(`#${tabID}`);
        activeTab.classList.add('activeTab');
    }

    const loadPage = () => {
        // load the main page
        const mainDiv = document.createElement('div');
        mainDiv.id = 'main';
        document.body.appendChild(mainDiv);

        pageLoader.makeDiv('header', '#main');
        pageLoader.makeDiv('leftSide', '#main');
        pageLoader.makeDiv('image', '#main');
        pageLoader.makeDiv('content', '#main');
        pageLoader.makeDiv('rightSide', '#main');
        pageLoader.makeDiv('footer', '#main');
        // add image
        pageLoader.makeIMG('hero', '.image');
        // add the navigation buttons to the header
        pageLoader.navButtons('home', '.header');
        pageLoader.navButtons('menu','.header');
        pageLoader.navButtons('about', '.header');
        // set home button as the 'active' button
        const homeButton = document.querySelector('#home');
        homeButton.classList.add('activeTab');
    }

    return { makeDiv, loadPage, navButtons, activateTab, makeIMG }
})();

export default pageLoader;
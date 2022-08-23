import './style.css';

console.log('clownpenis.fart')

const divBuilder = (() => {

    const classDiv = (divClass, parentClass) => {
        const parent = document.querySelector(parentClass);
        const div = document.createElement('div');
        div.classList.add(divClass);
        parent.appendChild(div);
    }

    return { classDiv }
})();

divBuilder.classDiv('.header', '#main')
divBuilder.classDiv('.leftSide', '#main')
divBuilder.classDiv('.content', '#main')
divBuilder.classDiv('.rightSide', '#main')
divBuilder.classDiv('.footer', '#main')
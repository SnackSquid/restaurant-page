import './style.css';

console.log('clownpenis.fart')

const divBuilder = (() => {

    const classDiv = (name, parent) => {
        const parent = document.querySelector(parent);
        const div = document.createElement('div');
        div.classList.add(name);
        parent.appendChild(div);
    }

    { classDiv }
})();

divBuilder.classDiv('.header', '#content');
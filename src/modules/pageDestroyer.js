

const pageDestroyer = (() => {

    const destroy = (div) => {
        div.remove();
        const main = document.createElement('div');
        main.id = '#main';
    }

    return { destroy }
})(); 

export default pageDestroyer;
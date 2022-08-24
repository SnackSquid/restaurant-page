import homeImage from './jay-wennington-N_Y88TWmGwA-unsplash2.jpg'
import menuImage from './jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import aboutImage from './jay-wennington-N_Y88TWmGwA-unsplash.jpg';

const contentController = (() => {

    const setText = (div) => {
        const content = document.querySelector(`.${div}`)
        content.textContent = 'homeMD';
    }

    const setImage = (currentTab) => {
        const tabs = {
            home: homeImage,
            menu: menuImage,
            about: aboutImage
        }
        const image = document.querySelector('#hero');
        image.src = tabs[currentTab];
    }

    return { setText, setImage }

})();

export default contentController;
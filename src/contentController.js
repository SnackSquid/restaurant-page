import homeImage from './jay-wennington-N_Y88TWmGwA-unsplash2.jpg'
import menuImage from './jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import aboutImage from './jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import homeText from './homepage.txt'

const contentController = (() => {

    const setText = (div, tabID) => {
        const tabs = {
            home: homeText,
            menu: homeText,
            about: homeText
        }
        const content = document.querySelector(`.${div}`)
        content.textContent = tabs[tabID];
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
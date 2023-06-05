import homeImage from '/home/chub/repos/restaurant-page/src/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg'
import menuImage from '/home/chub/repos/restaurant-page/src/images/ambitious-creative-co-rick-barrett-6pHiNI4qEnQ-unsplash.jpg';
import aboutImage from '/home/chub/repos/restaurant-page/src/images/shawnanggg-nmpW_WwwVSc-unsplash.jpg';
import homeText from '/home/chub/repos/restaurant-page/src/homepage.txt'

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
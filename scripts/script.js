let pageLanguage = 'Russian'; //This variable should be the highest of all;

function Dropdown() {
    const language = document.querySelector('.language');
    let dropdownText = document.querySelector('.language__dropdown-text');
    const dropdownLinks = document.querySelectorAll('.language__dropdown-link');

    if (!localStorage.getItem('languageMenu')) {
        dropdownText.textContent = pageLanguage;
    }
    else {
        dropdownText.textContent = localStorage.getItem('languageMenu');
        console.log(localStorage.getItem('languageData'));
    }

    language.children[0].addEventListener('click', () => {
        const svg = language.children[0].children[0];

        svg.classList.toggle('language__dropdown-svg_active');
        language.children[1].classList.toggle('language__dropdown-submenu_active');
    })

    for(const dropdownLink of dropdownLinks) {
        if(dropdownText.textContent === dropdownLink.textContent) {
            dropdownLink.remove();
        }

        dropdownLink.addEventListener('click', (event) => {
            dropdownText.textContent = event.target.textContent;
            localStorage.setItem('languageMenu', event.target.textContent);
            localStorage.setItem('languageData', event.target.dataset.languageId);
            location.reload();
        })
    }

}
Dropdown();
const navigation = {
    'russian': [
        {
            id: 1,
            title: 'О комплексе',
            link: '#'
        },
        {
            id: 2,
            title: 'О компании',
            link: '#'
        },
        {
            id: 3,
            title: 'Новости',
            link: '#'
        },
        {
            id: 4,
            title: 'Медиа-банк',
            link: '#'
        },
        {
            id: 5,
            title: 'Контакты',
            link: 'https://vk.com/id269791339'
        }
    ],

    'english': [
        {
            id: 1,
            title: 'About complex',
            link: '#'
        },
        {
            id: 2,
            title: 'About company',
            link: '#'
        },
        {
            id: 3,
            title: 'News',
            link: '#'
        },
        {
            id: 4,
            title: 'Media Bank',
            link: '#'
        },
        {
            id: 5,
            title: 'Contacts',
            link: 'https://vk.com/id269791339'
        }
    ]
}

const expoforum = {
    'russian': 'ЭКСПОФОРУМ',
    'english': 'EXPOFORUM'
}

const expoforumText = {
    'russian': 'конгрессно-выставочный центр Санкт-Петербурга',
    'english': 'Petersburg Convention and Exhibition Center'
}

const information = {
    'russian': 'О комплексе',
    'english': 'About complex'
}


let type = localStorage.getItem('languageData');
const language = !type ? 'russian' : type;

function setLocalLanguage(language, obj) {
    if (language === 'russian') {
        return obj[language];
    }
    else if (language === 'english') {
        return obj[language];
    }
}

function setLocalLanguageArr(language, obj) {
    if (language === 'russian') {
        return JSON.stringify(obj[language].map(el => el));
    }
    else if (language === 'english') {
        return JSON.stringify(obj[language].map(el => el));
    }
}

localStorage.setItem('expoforum', setLocalLanguage(language, expoforum));
localStorage.setItem('expoforumText', setLocalLanguage(language, expoforumText));
localStorage.setItem('information', setLocalLanguage(language, information));
//ARR
localStorage.setItem('navigationList', setLocalLanguageArr(language, navigation));



const navigationList = JSON.parse(localStorage.getItem('navigationList'));
console.log(navigationList);
const expoforumNavigation = document.querySelector('.expoforum__navigation');

navigationList.forEach(({title, link}) => {
    expoforumNavigation.innerHTML += `<a class="navigation__link link" href="${link}">${title}</a>`
})

const navigationLinks = document.querySelectorAll('.navigation__link');
navigationLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        for(const linkActive of navigationLinks) {
            linkActive.classList.remove('navigation__link_active');
        }
        link.classList.add('navigation__link_active');
    })
})




let expoforumTitle = document.querySelector('.expoforum__title');
let expoforumTextContent = document.querySelector('.expoforum__text');
let expoforumAbout = document.querySelector('.expoforum__about-text');
expoforumTitle.textContent = localStorage.getItem('expoforum');
expoforumTextContent.textContent = localStorage.getItem('expoforumText');
expoforumAbout.textContent = localStorage.getItem('information');
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const settings = {
    autoHeight: false,
    slidesPerView: 4,
    slidesPerColumn: 2,
}

// init Swiper:
const swipe = new Swiper('.swiper-container', settings);



const nav = document.querySelector('.expoforum__navigation');
let bar = document.querySelector('.expoforum__bar');

(function() {
    const throttle = function(type, name, obj) {
        obj = obj || window;
        let running = false;
        const func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

function changeHeightBar() {
    const heightNav = nav.offsetHeight;
    bar = document.querySelector('.expoforum__bar');
    if (window.innerWidth > 768) {
        bar.setAttribute('style', `height: ${heightNav}px`);
    }
    else {
        bar.setAttribute('style', `height: 100%`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    changeHeightBar();

    function debounce(fn, delay) {
        let timerId;

        return function(...args) {
            if (timerId) {
                clearTimeout(timerId);
            }

            timerId = setTimeout(() => {
                fn.apply(this, args);
                timerId = null;
            }, delay);
        };
    }

    window.addEventListener('optimizedResize', debounce(() => {
        changeHeightBar();
    }, 300));
});
function Search() {
    const searchContainer = document.querySelector('.expoforum__search');
    const searchInput = document.querySelector('.expoforum__search-input');
    const searchSvg = document.querySelector('.expoforum__search-svg');

    searchSvg.addEventListener("click", (event) => {
        searchSvg.classList.toggle('expoforum__search-svg_active');
        searchInput.classList.toggle('expoforum__search-input_active');
        searchContainer.classList.toggle('expoforum__search_active');
    });
}

Search();
 

function Burger() {
    const menu = document.querySelector('.mobile__menu');
    const burgerSvg = document.querySelector('.mobile__burger');

    burgerSvg.addEventListener("click", (event) => {
        burgerSvg.classList.toggle('burger_active');
        menu.classList.toggle('mobile__menu_active');
    });
}

Burger();
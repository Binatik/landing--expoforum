let pageLanguage = 'Russian'; //GlobalVar;
import "@babel/polyfill";
//Export as json ELL
const titleLogoData = {
    "russian": "ЭКСПОФОРУМ",
    "english": "EXPOFORUM"
}

//Export as json ARR
const navMenuData = {
    "russian": [
        {
            "id": 1,
            "title": "О комплексе",
            "link": "#"
        },
        {
            "id": 2,
            "title": "О компании",
            "link": "#"
        },
        {
            "id": 3,
            "title": "Новости",
            "link": "#"
        },
        {
            "id": 4,
            "title": "Медиа-банк",
            "link": "#"
        },
        {
            "id": 5,
            "title": "Контакты",
            "link": "https://vk.com/id269791339"
        }
    ],
    "english": [
        {
            "id": 1,
            "title": "About the complex",
            "link": "#"
        },
        {
            "id": 2,
            "title": "About the company",
            "link": "#"
        },
        {
            "id": 3,
            "title": "News",
            "link": "#"
        },
        {
            "id": 4,
            "title": "Media Bank",
            "link": "#"
        },
        {
            "id": 5,
            "title": "Contacts",
            "link": "https://vk.com/id269791339"
        }
    ]
}
const expoforumPreviewData = {
    "russian": [
        {
            "id": 1,
            "headerTitle": "ЭКСПОФОРУМ",
            "title": "Конгрессно-выставочный центр Санкт-Петербурга",
            "textLink": "О комплексе",
            "link": "#"
        }
    ],
    "english": [
        {
            "id": 1,
            "headerTitle": "EXPOFORUM",
            "title": "Congress and Exhibition Center. St. Petersburg",
            "textLink": "About the complex",
            "link": "#"
        }
    ]
}
const cardsHeaderData = {
    "russian": [
        {
            "id": 1,
            "title": "Календарь мероприятий",
            "subTitle": "Подробнее"
        },
        {
            "id": 2,
            "title": "Онлайн-заявка на организацию мероприятия",
            "subTitle": "Подробнее"
        },
        {
            "id": 3,
            "title": "Как добраться до Экспофорума",
            "subTitle": "Подробнее"
        },
        {
            "id": 4,
            "title": "План и инфраструктура комплекса",
            "subTitle": "Подробнее"
        },
        {
            "id": 5,
            "title": "Календарь мероприятий",
            "subTitle": "Подробнее"
        }
    ],
    "english": [
        {
            "id": 1,
            "title": "Events Calendar",
            "subTitle": "Details"
        },
        {
            "id": 2,
            "title": "Online application for event organization",
            "subTitle": "Details"
        },
        {
            "id": 3,
            "title": "How to get to Expoforum",
            "subTitle": "Details"
        },
        {
            "id": 4,
            "title": "Complex layout and infrastructure",
            "subTitle": "Details"
        },
        {
            "id": 5,
            "title": "Events Calendar",
            "subTitle": "Details"
        }
    ]
}

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

    language.children[0].addEventListener('click', (event) => {
        event.preventDefault();
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
function Translator() {
    let language = localStorage.getItem('languageData');
    language = !language ? 'russian' : language;

    function setLocalLanguage(language, json, setItemKey) {

        let item = Array.isArray(json.russian)
            ? json[language].map(el => el)
            : json[language];
        item = JSON.stringify(item)

        //We recommend that you call the setItemKey by its variable name.
        return localStorage.setItem(setItemKey, item);
    }
    /*
    It is necessary to have a json with different keys for translation.
    Each key must contain a dictionary. Make sure you have one.

    const testJson = {
        "russian": [
            {
                "title": "Санкт-Петербурга"
            }
        ],
        "english": [
            {
                "title": "Petersburg"
            }
        ]
    }

    Attention, changing dynamically is not supported.
    You need to use the paid option with the API
    */

    setLocalLanguage(language, titleLogoData, 'titleLogoData');
    setLocalLanguage(language, navMenuData, 'navMenuData');
    setLocalLanguage(language, expoforumPreviewData, 'expoforumPreviewData');
    setLocalLanguage(language, cardsHeaderData, 'cardsHeaderData');
}
Translator();
function renderData(settings) {
    const { selector, insertionElement, layout} = settings;
    let element = document.querySelector(selector);

    if (Array.isArray(insertionElement)) {
        insertionElement.map(target => element.innerHTML += layout(target));
    }
    else {
        console.log(layout);
        element.innerHTML += layout;
    }
}

renderData({
    selector: '.navigation',
    insertionElement: JSON.parse(localStorage.getItem('navMenuData')),

    layout: (targetItem) => (
        `<a class="navigation__link link" href="${targetItem.link}">${targetItem.title}</a>`
    )
})

renderData({
    selector: '.expoforum__information',
    insertionElement: JSON.parse(localStorage.getItem('expoforumPreviewData')),

    layout: (targetItem) => (
        `<h1 class="expoforum__title">${targetItem.headerTitle}</h1>
             <p class="expoforum__text">${targetItem.title}</p>
             <a href="${targetItem.link}" class="expoforum__about link center-items">
                 <span class="expoforum__about-text">${targetItem.textLink}</span>
                 <svg class="expoforum__about-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 50 16">
                      <path class="arrow" d="m14.7 1.4c-0.3-0.3-0.7-0.3-1 0-0.3 0.3-0.3 0.7 0 1l5 5H-5.1c-0.4 0-0.7 0.3-0.7 0.7 0 0.4 0.3 0.7 0.7 0.7H18.7l-5 5c-0.3 0.3-0.3 0.7 0 1 0.3 0.3 0.7 0.3 1 0l6.2-6.2c0.3-0.3 0.3-0.7 0-1z"/>
                 </svg>
             </a>`
    )
})

renderData({
    selector: '.expoforum__cards',
    insertionElement: JSON.parse(localStorage.getItem('cardsHeaderData')),

    layout: (targetItem) => (
        `<div class="expoforum__card swiper-slide">
                            <h2 class="expoforum__card-title">${targetItem.title}</h2>
                            <a href="" class="expoforum__about link center-items">
                                <span class="expoforum__about-text">${targetItem.subTitle}</span>
                                <svg class="expoforum__about-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 50 16">
                                    <path class="arrow" d="m14.7 1.4c-0.3-0.3-0.7-0.3-1 0-0.3 0.3-0.3 0.7 0 1l5 5H-5.1c-0.4 0-0.7 0.3-0.7 0.7 0 0.4 0.3 0.7 0.7 0.7H18.7l-5 5c-0.3 0.3-0.3 0.7 0 1 0.3 0.3 0.7 0.3 1 0l6.2-6.2c0.3-0.3 0.3-0.7 0-1z"/>
                                </svg>
                            </a>
                        </div>`
    )
})

// renderData({
//     selector: '.expoforum__information',
//     insertionElement: titleLogoData,
//     layout: `<h1 class="expoforum__title">${titleLogo}</h1>`
// })





function Observer() {
    const mobileMenu = document.querySelector('.mobile__menu');
    const navigationLinks = document.querySelectorAll('.navigation__link');
    let sections = document.querySelectorAll('.section')

    const observerOptions = {
        root: null,
        threshold: 0.5
    }

    function changeNavigation(entries, observer) {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                for(const linkActive of navigationLinks) {
                    linkActive.classList.remove('navigation__link_active'); //Сссылка меню в  nav
                }

                sections = [].slice.call(sections);
                const sectionIndex = sections.indexOf(entry.target);
                navigationLinks[sectionIndex].classList.add('navigation__link_active');

                sectionIndex > 1
                    ? mobileMenu.classList.add('mobile__menu_fixed')
                    : mobileMenu.classList.remove('mobile__menu_fixed') ;
            }
        })
    }

    const observer = new IntersectionObserver(changeNavigation,observerOptions);
    sections.forEach((target) => observer.observe(target));
}

Observer();

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

function Slider() {
    const settings = {
        breakpoints: {

            320: {
                autoHeight: true,
                spaceBetween: 10,
                slidesPerColumn: 1,
                slidesPerView: 1,
            },

            768: {
                autoHeight: true,
                spaceBetween: 10,
                slidesPerColumn: 1,
                slidesPerView: 2,
            },

            992: {
                autoHeight: false,
                spaceBetween: 30,
                slidesPerView: 2,
                slidesPerColumn: 2,
            },
        }
    }

    // init Swiper:
    new Swiper('.swiper-container', settings);
}
Slider();



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
const titleTexts = 'EXPOFORUM'.split('');

const linkLogo = document.querySelector('.link');
for (const letter of titleTexts) {
    linkLogo.innerHTML += `<span class="link__letter">${letter}</span>`
}
const letters = document.querySelectorAll('.link__letter');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

linkLogo.addEventListener('mouseover', async () => {
    for (const letter of letters) {
        await sleep(35);
        letter.setAttribute('style', `color: #000;`);
    }
    letters[letters.length - 1].setAttribute('style', `color: #FFC41E;`);

});

linkLogo.addEventListener('mouseout', async () => {
    for (const letter of letters) {
        await sleep(35);
        letter.setAttribute('style', `color: #fff;`);
    }

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

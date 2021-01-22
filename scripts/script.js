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
        language.children[0].classList.toggle('language__dropdown-svg_active');
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
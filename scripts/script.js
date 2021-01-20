/* throttle */
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

function throttleFn(fn, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();

        if (now - lastCall < delay) {
            return;
        }

        lastCall = now;
        fn.apply(this, args);
    };
}

window.addEventListener("optimizedResize", (event) => {
    const heightNav = document.querySelector('.expoforum__navigation').offsetHeight;
    const bar = document.querySelector('.expoforum__bar');
    if (window.innerWidth > 768) {
        bar.setAttribute('style', `height: ${heightNav}px`);
        console.log(heightNav);
    }

    else {
        bar.setAttribute('style', `height: 100%`);
    }
})
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
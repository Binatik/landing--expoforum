let heightNav = document.querySelector('.expoforum__navigation').offsetHeight;
let bar = document.querySelector('.expoforum__bar');
const languageContainer = document.querySelector('.expoforum__language');

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

const languageStyle = window.getComputedStyle(languageContainer, null).getPropertyValue('margin');
function changeStyleMargin() {
    if(heightNav > 85 || heightNav >= 86) {
        languageContainer.style.margin = '0';
    }
    else {
        languageContainer.style.margin = languageStyle;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    heightNav = document.querySelector('.expoforum__navigation').offsetHeight;
    bar = document.querySelector('.expoforum__bar');
    bar.setAttribute('style', `height: ${heightNav}px`);

    changeStyleMargin()

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
        heightNav = document.querySelector('.expoforum__navigation').offsetHeight;
        bar = document.querySelector('.expoforum__bar');
        if (window.innerWidth > 768) {
            console.log(heightNav);
            bar.setAttribute('style', `height: ${heightNav}px`);
        }

        else {
            bar.setAttribute('style', `height: 100%`);
        }

        changeStyleMargin()
    }, 100));
});
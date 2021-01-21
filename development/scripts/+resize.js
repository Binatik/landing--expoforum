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


document.addEventListener("DOMContentLoaded", () => {
    let heightNav = document.querySelector('.expoforum__navigation').offsetHeight;
    let bar = document.querySelector('.expoforum__bar');
    bar.setAttribute('style', `height: ${heightNav}px`);

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
            console.log('test');
            bar.setAttribute('style', `height: ${heightNav}px`);
        }

        else {
            bar.setAttribute('style', `height: 100%`);
        }
    }, 100));
});
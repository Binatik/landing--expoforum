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
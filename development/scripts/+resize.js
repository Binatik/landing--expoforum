function Resize() {
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

    function slider(wrapper) {
        const wrapperSlider = document.querySelector(wrapper);

        let cardSwiper = '';

        function mobileSlider() {
            if (window.innerWidth <= 768 && wrapperSlider.dataset.mobile === 'false') {
                resizeCard('.swiper-wrapper');

                cardSwiper = new Swiper(wrapperSlider, {
                    autoHeight: false,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    breakpoints: {
                        576: {
                            slidesPerView: 2,
                        }
                    }
                });
                wrapperSlider.dataset.mobile = 'true';
            }
            if (window.innerWidth >= 768) {
                wrapperSlider.dataset.mobile = 'false';
                if (wrapperSlider.classList.contains('swiper-container-initialized')) cardSwiper.destroy();
            }
        }
        mobileSlider();
    }

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

    function throttle(fn, delay) {
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

    changeHeightBar();
    slider('.swiper-container');
    resizeCard('.swiper-wrapper');

    window.addEventListener('optimizedResize', debounce(() => {
        slider('.swiper-container');
        changeHeightBar();
    }, 150));

    window.addEventListener('optimizedResize', throttle(() => {
        resizeCard('.swiper-wrapper');
    }, 150));
}

Resize();
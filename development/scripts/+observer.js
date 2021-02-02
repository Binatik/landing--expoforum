function Observer() {
    const mobileMenu = document.querySelector('.mobile__menu');
    const navigationLinks = document.querySelectorAll('.navigation__link');
    const childrens = document.querySelectorAll('.auto-height');

    let sections = document.querySelectorAll('.section');

    function changeHeight(target, alterations, observer) {
        resizeCard(target);
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

    function sectionsObserver(selector, func, settings) {
        const observer = new IntersectionObserver(func, settings);

        selector.length > 0
            ? selector.forEach((target) => observer.observe(target))
            : observer.observe(selector);
    }
    sectionsObserver(sections, changeNavigation, {
        root: null,
        threshold: 0.5
    })

    function observerElementDOM(selection, func, status) {
        const target = document.querySelector(selection);
        const observer =  new MutationObserver((alterations, observer) => (
            func(target, alterations, observer)))

        const settings = status ?
            {
                childList: true,
                subtree: true,
                characterDataOldValue: true
            }
            :
            {
                childList: true,
                subtree: false,
                characterDataOldValue: false
            }

        observer.observe(target, settings);
    }
    observerElementDOM('.swiper-wrapper', changeHeight, true);
}

Observer();
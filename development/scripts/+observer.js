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

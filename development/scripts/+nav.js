const navigationLinks = document.querySelectorAll('.navigation__link'); //Ссылки меню в  nav

//наблюдает IntersectionObserver за всеми секциями. >
let sections = document.querySelectorAll('.section')

const observerOptions = {
    root: null, //Мониторим цель внутри viewport
    threshold: 0.5
}

function changeNavigation(entries, observer) {
    //entries - Это список пересечение целей.
    // observer - Это наш наблюдатель.
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            for(const linkActive of navigationLinks) {
                linkActive.classList.remove('navigation__link_active'); //Сссылка меню в  nav
            }

            sections = [].slice.call(sections);
            const sectionIndex = sections.indexOf(entry.target);
            navigationLinks[sectionIndex].classList.add('navigation__link_active');
        }
    })
}

const observer = new IntersectionObserver(changeNavigation,observerOptions);
sections.forEach((target) => observer.observe(target));

// navigationLinks.forEach((link, index) => {
//     link.addEventListener('click', (event) => {
//         for(const linkActive of navigationLinks) {
//             linkActive.classList.remove('navigation__link_active');
//         }
//         link.classList.add('navigation__link_active');
//     })
// })

// const expoforumNav = document.querySelectorAll('.expoforumNav');
// expoforumNav.forEach((element, index) => {
//     element.addEventListener('mouseover', (event) => {
//         for(const linkActive of navigationLinks) {
//             linkActive.classList.remove('navigation__link_active');
//         }
//
//         navigationLinks[index].classList.add('navigation__link_active');
//     })
// })


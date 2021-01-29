const navigationLinks = document.querySelectorAll('.navigation__link');
// navigationLinks.forEach((link, index) => {
//     link.addEventListener('click', (event) => {
//         for(const linkActive of navigationLinks) {
//             linkActive.classList.remove('navigation__link_active');
//         }
//         link.classList.add('navigation__link_active');
//     })
// })

const expoforumNav = document.querySelectorAll('.expoforumNav');
expoforumNav.forEach((element, index) => {
    element.addEventListener('mouseover', (event) => {
        for(const linkActive of navigationLinks) {
            linkActive.classList.remove('navigation__link_active');
        }

        navigationLinks[index].classList.add('navigation__link_active');
    })
})


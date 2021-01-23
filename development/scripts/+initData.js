const navigationList = JSON.parse(localStorage.getItem('navigationList'));
console.log(navigationList);
const expoforumNavigation = document.querySelector('.expoforum__navigation');

navigationList.forEach(({title, link}) => {
    expoforumNavigation.innerHTML += `<a class="navigation__link link" href="${link}">${title}</a>`
})

const navigationLinks = document.querySelectorAll('.navigation__link');
navigationLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        for(const linkActive of navigationLinks) {
            linkActive.classList.remove('navigation__link_active');
        }
        link.classList.add('navigation__link_active');
    })
})




let expoforumTitle = document.querySelector('.expoforum__title');
let expoforumTextContent = document.querySelector('.expoforum__text');
expoforumTitle.textContent = localStorage.getItem('expoforum');
expoforumTextContent.textContent = localStorage.getItem('expoforumText');
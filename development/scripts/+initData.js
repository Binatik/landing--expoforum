const navigationList = JSON.parse(localStorage.getItem('navigationList'));
const detailsList = JSON.parse(localStorage.getItem('detailsList'));

const expoforumNavigation = document.querySelector('.expoforum__navigation');
const expoforumCard = document.querySelector('.expoforum__cards');

navigationList.forEach(({title, link}) => {
    expoforumNavigation.innerHTML += `<a class="navigation__link link" href="${link}">${title}</a>`
})

detailsList.forEach(({title, subTitle}) => {
    expoforumCard.innerHTML += `<div class="expoforum__card swiper-slide">
                            <h2 class="expoforum__card-title">${title}</h2>
                            <a href="" class="expoforum__about link center-items">
                                <span class="expoforum__about-text">${subTitle}</span>
                                <svg class="expoforum__about-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 50 16">
                                    <path class="arrow" d="m14.7 1.4c-0.3-0.3-0.7-0.3-1 0-0.3 0.3-0.3 0.7 0 1l5 5H-5.1c-0.4 0-0.7 0.3-0.7 0.7 0 0.4 0.3 0.7 0.7 0.7H18.7l-5 5c-0.3 0.3-0.3 0.7 0 1 0.3 0.3 0.7 0.3 1 0l6.2-6.2c0.3-0.3 0.3-0.7 0-1z"/>
                                </svg>
                            </a>
                        </div>`
})






let expoforumTitle = document.querySelector('.expoforum__title');
let expoforumTextContent = document.querySelector('.expoforum__text');
let expoforumAbout = document.querySelector('.expoforum__about-text');
expoforumTitle.textContent = localStorage.getItem('expoforum');
expoforumTextContent.textContent = localStorage.getItem('expoforumText');
expoforumAbout.textContent = localStorage.getItem('information');
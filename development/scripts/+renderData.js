function renderData(settings) {
    const { selector, insertionElement, layout} = settings;
    let element = document.querySelector(selector);

    if (Array.isArray(insertionElement)) {
        insertionElement.map(target => element.innerHTML += layout(target));
    }
    else {
        console.log(layout);
        element.innerHTML += layout;
    }
}

renderData({
    selector: '.navigation',
    insertionElement: JSON.parse(localStorage.getItem('navMenuData')),

    layout: (targetItem) => (
        `<a class="navigation__link link" href="${targetItem.link}">${targetItem.title}</a>`
    )
})

renderData({
    selector: '.expoforum__information',
    insertionElement: JSON.parse(localStorage.getItem('expoforumPreviewData')),

    layout: (targetItem) => (
        `<h1 class="expoforum__title">${targetItem.headerTitle}</h1>
             <p class="expoforum__text">${targetItem.title}</p>
             <a href="${targetItem.link}" class="expoforum__about link center-items">
                 <span class="expoforum__about-text">${targetItem.textLink}</span>
                 <svg class="expoforum__about-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 50 16">
                      <path class="arrow" d="m14.7 1.4c-0.3-0.3-0.7-0.3-1 0-0.3 0.3-0.3 0.7 0 1l5 5H-5.1c-0.4 0-0.7 0.3-0.7 0.7 0 0.4 0.3 0.7 0.7 0.7H18.7l-5 5c-0.3 0.3-0.3 0.7 0 1 0.3 0.3 0.7 0.3 1 0l6.2-6.2c0.3-0.3 0.3-0.7 0-1z"/>
                 </svg>
             </a>`
    )
})

renderData({
    selector: '.expoforum__cards',
    insertionElement: JSON.parse(localStorage.getItem('cardsHeaderData')),

    layout: (targetItem) => (
        `<div class="expoforum__card swiper-slide">
                            <h2 class="expoforum__card-title">${targetItem.title}</h2>
                            <a href="" class="expoforum__about link center-items">
                                <span class="expoforum__about-text">${targetItem.subTitle}</span>
                                <svg class="expoforum__about-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="16" viewBox="0 0 50 16">
                                    <path class="arrow" d="m14.7 1.4c-0.3-0.3-0.7-0.3-1 0-0.3 0.3-0.3 0.7 0 1l5 5H-5.1c-0.4 0-0.7 0.3-0.7 0.7 0 0.4 0.3 0.7 0.7 0.7H18.7l-5 5c-0.3 0.3-0.3 0.7 0 1 0.3 0.3 0.7 0.3 1 0l6.2-6.2c0.3-0.3 0.3-0.7 0-1z"/>
                                </svg>
                            </a>
                        </div>`
    )
})

// renderData({
//     selector: '.expoforum__information',
//     insertionElement: titleLogoData,
//     layout: `<h1 class="expoforum__title">${titleLogo}</h1>`
// })





-include('+data.js')

//Global
function resizeCard(card) {
    const childrens = document.querySelectorAll('.auto-height');

    let target;
    let height;

    if (typeof card === 'string') {
        target = document.querySelector(card);
        height = target.clientHeight;
        childrens.forEach(element => element.style.minHeight = height + 'px');
    }
    else {
        const height = card.clientHeight;
        childrens.forEach(element => element.style.minHeight = height + 'px');
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    -include('+dropdown.js')
    -include('+translator.js')
    -include('+renderData.js')
    -include('+resize.js')
    -include('+observer.js')
    -include('+effect.js')
    -include('+search.js')
    -include('+burger.js')
})
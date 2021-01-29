import "@babel/polyfill";
const titleTexts = 'EXPOFORUM'.split('');

const linkLogo = document.querySelector('.link');
for (const letter of titleTexts) {
    linkLogo.innerHTML += `<span class="link__letter">${letter}</span>`
}
const letters = document.querySelectorAll('.link__letter');
console.log(letters);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

linkLogo.addEventListener('mouseover', async () => {
    for (const letter of letters) {
        await sleep(35);
        letter.setAttribute('style', `color: #000;`);
    }
    letters[letters.length - 1].setAttribute('style', `color: #FFC41E;`);

});

linkLogo.addEventListener('mouseout', async () => {
    for (const letter of letters) {
        await sleep(35);
        letter.setAttribute('style', `color: #fff;`);
    }

});





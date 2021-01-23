const navigationList = JSON.parse(localStorage.getItem('navigationList'));
console.log(navigationList);
const expoforumNavigation = document.querySelector('.expoforum__navigation');

navigationList.forEach(title => {
    expoforumNavigation.innerHTML += `<a class="navigation__link link" href="#">${title}</a>`
})

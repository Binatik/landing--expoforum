const navigation = {
    'russian': [
        {
            id: 1,
            title: 'О комплексе',
            link: '#'
        },
        {
            id: 2,
            title: 'О компании',
            link: '#'
        },
        {
            id: 3,
            title: 'Новости',
            link: '#'
        },
        {
            id: 4,
            title: 'Медиа-банк',
            link: '#'
        },
        {
            id: 5,
            title: 'Контакты',
            link: 'https://vk.com/id269791339'
        }
    ],

    'english': [
        {
            id: 1,
            title: 'About complex',
            link: '#'
        },
        {
            id: 2,
            title: 'About company',
            link: '#'
        },
        {
            id: 3,
            title: 'News',
            link: '#'
        },
        {
            id: 4,
            title: 'Media Bank',
            link: '#'
        },
        {
            id: 5,
            title: 'Contacts',
            link: 'https://vk.com/id269791339'
        }
    ]
}

const expoforum = {
    'russian': 'ЭКСПОФОРУМ',
    'english': 'EXPOFORUM'
}

const expoforumText = {
    'russian': 'конгрессно-выставочный центр Санкт-Петербурга',
    'english': 'Petersburg Convention and Exhibition Center'
}

const information = {
    'russian': 'О комплексе',
    'english': 'About complex'
}


let type = localStorage.getItem('languageData');
const language = !type ? 'russian' : type;

function setLocalLanguage(language, obj) {
    if (language === 'russian') {
        return obj[language];
    }
    else if (language === 'english') {
        return obj[language];
    }
}

function setLocalLanguageArr(language, obj) {
    if (language === 'russian') {
        return JSON.stringify(obj[language].map(el => el));
    }
    else if (language === 'english') {
        return JSON.stringify(obj[language].map(el => el));
    }
}

localStorage.setItem('expoforum', setLocalLanguage(language, expoforum));
localStorage.setItem('expoforumText', setLocalLanguage(language, expoforumText));
localStorage.setItem('information', setLocalLanguage(language, information));
//ARR
localStorage.setItem('navigationList', setLocalLanguageArr(language, navigation));



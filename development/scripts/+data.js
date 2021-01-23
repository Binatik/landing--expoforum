const navigation = {
    'russian':
        ['О комплексе', 'О компании', 'Новости', 'Медиа-банк', 'Контакты'],

    'english':
        ['About complex', 'About company', 'News', 'Media Bank', 'Contacts']
}

let type = localStorage.getItem('languageData');
const language = !type ? 'russian' : type;

function setLocalLanguage(language, obj) {
    if (language === 'russian') {
        return JSON.stringify(obj[language].map(el => el));
    }
    else if (language === 'english') {
        return JSON.stringify(obj[language].map(el => el));
    }
}

localStorage.setItem('navigationList', setLocalLanguage(language, navigation));



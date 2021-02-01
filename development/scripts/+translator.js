function Translator() {
    let language = localStorage.getItem('languageData');
    language = !language ? 'russian' : language;

    function setLocalLanguage(language, json, setItemKey) {

        let item = Array.isArray(json.russian)
            ? json[language].map(el => el)
            : json[language];
        item = JSON.stringify(item)

        //We recommend that you call the setItemKey by its variable name.
        return localStorage.setItem(setItemKey, item);
    }
    /*
    It is necessary to have a json with different keys for translation.
    Each key must contain a dictionary. Make sure you have one.

    const testJson = {
        "russian": [
            {
                "title": "Санкт-Петербурга"
            }
        ],
        "english": [
            {
                "title": "Petersburg"
            }
        ]
    }

    Attention, changing dynamically is not supported.
    You need to use the paid option with the API
    */

    setLocalLanguage(language, titleLogoData, 'titleLogoData');
    setLocalLanguage(language, navMenuData, 'navMenuData');
    setLocalLanguage(language, expoforumPreviewData, 'expoforumPreviewData');
    setLocalLanguage(language, cardsHeaderData, 'cardsHeaderData');
}
Translator();
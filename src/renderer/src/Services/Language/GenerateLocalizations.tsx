var fs = require('fs');

const api_token = "9b7011207b2078d820e9c67f28bfac95";
const project_id = "655139";

//POE Refers to languages differently than we do, this enum helps to change it.
enum languagePairs {
    "zh-Hans" = "zh_Hans",
    "zh-Hant" = "zh_Hant",
    "en" = "en",
    "fr" = "fr_FR",
    "de" = "de_DE",
    "it" = "it_IT",
    "ja" = "ja_JP",
    "ko" = "ko_KR",
    "pl" = "pl_PL",
    "pt-br" = "pt_BR",
    "ru" = "ru_RU",
    "es" = "es_ES",
    "es-419" = "es_419",
    "tr" = "tr_TR"
}


/**
* Fetches the available languages from POE. Need to get this first.
*/
export const getLanguages = async (): Promise<false | any > => {
    console.time("POE API call finished in:")
    console.log("POE API call started, this will take a while.")
    const apiCall = await fetch('https://api.poeditor.com/v2/languages/list', {
        method: 'POST',
        body: new URLSearchParams({
            'api_token': api_token,
            'id': project_id
        })
    });
    if (apiCall.status !== 200) return false
  
    const languages = await apiCall.json()

    let sanitizedLanguageData:any[] = [];

    
    for await (const values of languages.result.languages.map(language => getLanguageData(language.code))) {
        sanitizedLanguageData[languagePairs[values.language]] = values.translations;
    }

    console.timeEnd("POE API call finished in:")
    return sanitizedLanguageData
  }

/**
* Fetches the term data from a given language
*/
  export const getLanguageData = async (language: string): Promise<any > => {
    const apiCall = await fetch('https://api.poeditor.com/v2/terms/list', {
        method: 'POST',
        body: new URLSearchParams({
            'api_token': api_token,
            'id': project_id,
            'language': language
        })
    });
    if (apiCall.status !== 200) return false
  
    const translationData = await apiCall.json()
    let keyTermPairs: any[] = [];

    translationData.result.terms.forEach(termData => {
        keyTermPairs[termData.reference] = termData.translation.content;
    })
    
    return {language: language, translations: keyTermPairs}
  }


/**
* Generates the StringResources.json file from the POE Data
*/
export const generateLocalizatons = async() => {
    let languageData = await getLanguages();

    let keys: string[] = Object.keys(languageData.en);

    let stringToWrite: string = "export type StringResourceKey = keyof typeof StringResources;\n\nexport const StringResources = {\n\t\"\": {\n\t\t\"en\": \"<Blank translation>\",\n\t\t\"de_DE\": \"<Blank translation>\",\n\t\t\"es_419\": \"<Blank translation>\",\n\t\t\"es_ES\": \"<Blank translation>\",\n\t\t\"fr_FR\": \"<Blank translation>\",\n\t\t\"it_IT\": \"<Blank translation>\",\n\t\t\"ja_JP\": \"<Blank translation>\",\n\t\t\"ko_KR\": \"<Blank translation>\",\n\t\t\"pl_PL\": \"<Blank translation>\",\n\t\t\"pt_BR\": \"<Blank translation>\",\n\t\t\"ru_RU\": \"<Blank translation>\",\n\t\t\"tr_TR\": \"<Blank translation>\",\n\t\t\"zh_Hans\": \"<Blank translation>\",\n\t\t\"zh_Hant\": \"<Blank translation>\"\n\t},\n"

    keys.forEach(key => {
        let zh_HansString = languageData.zh_Hans[key];
        let zh_HantString = languageData.zh_Hant[key];
        let enString = languageData.en[key];
        let fr_FRString = languageData.fr_FR[key];
        let de_DEString = languageData.de_DE[key];
        let it_ITString = languageData.it_IT[key];
        let ja_JPString = languageData.ja_JP[key];
        let ko_KRString = languageData.ko_KR[key];
        let pl_PLString = languageData.pl_PL[key];
        let pt_BRString = languageData.pt_BR[key];
        let ru_RUString = languageData.ru_RU[key];
        let es_ESString = languageData.es_ES[key];
        let es_419String = languageData.es_419[key];
        let tr_TRString = languageData.tr_TR[key];

        stringToWrite += "\t\""+key+"\": {\n\t\t\"en\": \""+enString+"\",\n\t\t\"de_DE\": \""+de_DEString+"\",\n\t\t\"es_419\": \""+es_419String+"\",\n\t\t\"es_ES\": \""+es_ESString+"\",\n\t\t\"fr_FR\": \""+fr_FRString+"\",\n\t\t\"it_IT\": \""+it_ITString+"\",\n\t\t\"ja_JP\": \""+ja_JPString+"\",\n\t\t\"ko_KR\": \""+ko_KRString+"\",\n\t\t\"pl_PL\": \""+pl_PLString+"\",\n\t\t\"pt_BR\": \""+pt_BRString+"\",\n\t\t\"ru_RU\": \""+ru_RUString+"\",\n\t\t\"tr_TR\": \""+tr_TRString+"\",\n\t\t\"zh_Hans\": \""+zh_HansString+"\",\n\t\t\"zh_Hant\": \""+zh_HantString+"\"\n\t},\n"
    });

    stringToWrite += "\n}";

    fs.writeFileSync('D:/StringResources.tsx', stringToWrite, 'utf-8');
    console.log("File written successfully");
};
var fs = require('fs');

/*
    You need to get the languages first, then all the translations on said language.
*/
const api_token = "9b7011207b2078d820e9c67f28bfac95";
const project_id = "655139";

enum termKeyPairs {
    "﻿Cash" = "wallet.cash",
    "C-Stack" = "wallet.gold",
    "Payday Credits" = "wallet.cred",
    "Fetching Data" = "misc.loading",
    "Refresh Data" = "header.refreshButtonTitle",
    "Show only pinned challenges" = "header.showOnlyPinnedButtonTitle",
    "Search" = "header.searchBarTitle",
    "Sort by" = "header.searchBarSortByTitle",
    "High %" = "sortBy.HighPerc",
    "Low %" = "sortBy.LowPerc",
    "Options" = "header.optionsButtonTooltip",
    "Level" = "header.accountLevelText",
    "Level Progression" = "account.tooltipTitle",
    "Current IP" = "account.currentIp",
    "Total IP" = "account.totalIp",
    "Current Wallet" = "wallet.tooltipTitle",
    "Next C-Stack vendor reset in" = "wallet.nextVendorReset",
    "day" = "date.day",
    "days" = "date.days",
    "hour" = "date.hour",
    "hours" = "date.hours",
    "minute" = "date.minute",
    "minutes" = "date.minutes",
    "second" = "date.second",
    "seconds" = "date.seconds",
    "Language" = "options.languageSelectorTitle",
    "Sign out" = "options.signOutButtonTitle",
    "Exports data required for PayCheck 3. Do not use if you don't know what it's for" = "options.paycheckAlert",
    "Export data (PayCheck3)" = "options.paycheckButtonTitle",
    "Filters" = "filters.menuTitle",
    "Category" = "filters.optionCategory",
    "Difficulty" = "filters.optionDifficulty",
    "Tactic" = "filters.optionTactic",
    "Heist" = "filters.optionHeist",
    "Weapon" = "filters.optionWeapon",
    "Completed" = "filters.statusComplete",
    "In Progress" = "filters.statusInProgress",
    "Locked" = "filters.statusLocked",
    "Bugged" = "filters.statusBugged",
    "Show all" = "filters.showAll",
    "Combat" = "filters.categoryOptionCombat",
    "Career" = "filters.categoryOptionCareer",
    "Weapon specific" = "filters.categoryOptionWeaponSpec",
    "Loud" = "filters.tacticOptionLoud",
    "Stealth" = "filters.tacticOptionStealth",
    "No Rest For The Wicked" = "filters.heistOptionNoRestForTheWicked",
    "Road Rage" = "filters.heistOptionRoadRage",
    "Dirty Ice" = "filters.heistOptionDirtyIce",
    "Rock the Cradle" = "filters.heistOptionRockTheCradle",
    "Under the Surphaze" = "filters.heistOptionUnderTheSurphaze",
    "Gold & Sharke" = "filters.heistOptionGoldAndSharke",
    "99 Boxes" = "filters.heistOption99Boxes",
    "Touch the Sky" = "filters.heistOptionTouchTheSky",
    "Assault Rifle" = "filters.weaponOptionTypeAR",
    "Marksman Rifle" = "filters.weaponOptionTypeDMR",
    "Pistol" = "filters.weaponOptionTypePistol",
    "Revolver" = "filters.weaponOptionTypeRevolver",
    "SMG" = "filters.weaponOptionTypeSMG",
    "Shotgun" = "filters.weaponOptionTypeShotgun",
    "Overkill Weapon" = "filters.weaponOptionTypeOverkill",
    "Show Prerequisites" = "card.showPrerequisitesText",
    "Reward" = "card.rewardText",
    "Infamy Points" = "card.rewardInfamyPoints",
    "This Challenge is Bugged!" = "card.buggedText",
    "There are two types of bugged challenges: \n1. Has a false prerequisite and won't unlock.\n2. Won't be flagged completed, but you can do it multiple times." = "card.buggedTooltip",
    "<Localization name> translation made by:" = "main.localizationMadeBy"
}

const variableKeys: string[] = [
    "wallet.cash",
    "wallet.gold",
    "wallet.cred",
    "misc.loading",
    "header.refreshButtonTitle",
    "header.showOnlyPinnedButtonTitle",
    "header.searchBarTitle",
    "header.searchBarSortByTitle",
    "sortBy.HighPerc",
    "sortBy.LowPerc",
    "header.optionsButtonTooltip",
    "header.accountLevelText",
    "account.tooltipTitle",
    "account.currentIp",
    "account.totalIp",
    "wallet.tooltipTitle",
    "wallet.nextVendorReset",
    "date.day",
    "date.days",
    "date.hour",
    "date.hours",
    "date.minute",
    "date.minutes",
    "date.second",
    "date.seconds",
    "options.languageSelectorTitle",
    "options.signOutButtonTitle",
    "options.paycheckAlert",
    "options.paycheckButtonTitle",
    "filters.menuTitle",
    "filters.optionCategory",
    "filters.optionDifficulty",
    "filters.optionTactic",
    "filters.optionHeist",
    "filters.optionWeapon",
    "filters.statusComplete",
    "filters.statusInProgress",
    "filters.statusLocked",
    "filters.statusBugged",
    "filters.showAll",
    "filters.categoryOptionCombat",
    "filters.categoryOptionCareer",
    "filters.categoryOptionWeaponSpec",
    "filters.tacticOptionLoud",
    "filters.tacticOptionStealth",
    "filters.heistOptionNoRestForTheWicked",
    "filters.heistOptionRoadRage",
    "filters.heistOptionDirtyIce",
    "filters.heistOptionRockTheCradle",
    "filters.heistOptionUnderTheSurphaze",
    "filters.heistOptionGoldAndSharke",
    "filters.heistOption99Boxes",
    "filters.heistOptionTouchTheSky",
    "filters.weaponOptionTypeAR",
    "filters.weaponOptionTypeDMR",
    "filters.weaponOptionTypePistol",
    "filters.weaponOptionTypeRevolver",
    "filters.weaponOptionTypeSMG",
    "filters.weaponOptionTypeShotgun",
    "filters.weaponOptionTypeOverkill",
    "card.showPrerequisitesText",
    "card.rewardText",
    "card.rewardInfamyPoints",
    "card.buggedText",
    "card.buggedTooltip",
    "main.localizationMadeBy"
]

export const getLanguages = async (): Promise<false | any[] > => {

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

    console.log("translation api call started, this will take a while.")
    for await (const translations of languages.result.languages.map(language => getLanguageData(language.code))) {
        sanitizedLanguageData.push({...translations})
    }
    console.log("translation api call ended")


    return sanitizedLanguageData
  }

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
    
    let translations: any[] = [];
    translations["language"] = language;
    translationData.result.terms.forEach(langData => {
        translations[termKeyPairs[langData.term]] = langData.translation.content;
    });
    
    return translations
  }


export const generateLocalizatons = async() => {
    let languageData = await getLanguages();

    let stringToWrite: string = "export type StringResourceKey = keyof typeof StringResources;\n\nexport const StringResources = {\n"
    
    if(languageData) variableKeys.forEach(key => {
        let zh_HansString = languageData[0][key];
        let zh_HantString = languageData[1][key];
        let enString = languageData[2][key];
        let fr_FRString = languageData[3][key];
        let de_DEString = languageData[4][key];
        let it_ITString = languageData[5][key];
        let ja_JPString = languageData[6][key];
        let ko_KRString = languageData[7][key];
        let pl_PLString = languageData[8][key];
        let pt_BRString = languageData[9][key];
        let ru_RUString = languageData[10][key];
        let es_ESString = languageData[11][key];
        let es_419String = languageData[12][key];
        let tr_TRString = languageData[13][key];

        stringToWrite += "\t\""+key+"\": {\n\t\t\"en\": \""+enString+"\",\n\t\t\"de_DE\": \""+de_DEString+"\",\n\t\t\"es_419\": \""+es_419String+"\",\n\t\t\"es_ES\": \""+es_ESString+"\",\n\t\t\"fr_FR\": \""+fr_FRString+"\",\n\t\t\"it_IT\": \""+it_ITString+"\",\n\t\t\"ja_JP\": \""+ja_JPString+"\",\n\t\t\"ko_KR\": \""+ko_KRString+"\",\n\t\t\"pl_PL\": \""+pl_PLString+"\",\n\t\t\"pt_BR\": \""+pt_BRString+"\",\n\t\t\"ru_RU\": \""+ru_RUString+"\",\n\t\t\"tr_TR\": \""+tr_TRString+"\",\n\t\t\"zh_Hans\": \""+zh_HansString+"\",\n\t\t\"zh_Hant\": \""+zh_HantString+"\"\n\t},\n"
    });

    stringToWrite += "\n}";

    fs.writeFileSync('D:/StringResources.tsx', stringToWrite, 'utf-8');
    console.log("File written successfully");
};
import { ChallengeResourceKey, ChallengeResources } from "./ChallengeResources"
import { StringResourceKey, StringResources } from "./StringResources"
import { getChosenLanguage } from "@renderer/Services/Language/Language"

export type internalizedChallenge = 
{
  internalName: string,
  en: {title: string, desc: string},
  de_DE: {title: string, desc: string},
  es_419: {title: string, desc: string},
  es_ES: {title: string, desc: string},
  fr_FR: {title: string, desc: string},
  it_IT: {title: string, desc: string},
  ja_JP: {title: string, desc: string},
  ko_KR: {title: string, desc: string},
  pl_PL: {title: string, desc: string},
  pt_BR: {title: string, desc: string},
  ru_RU: {title: string, desc: string},
  tr_TR: {title: string, desc: string},
  zh_Hans: {title: string, desc: string},
  zh_Hant: {title: string, desc: string},
}

export type sanitizedChallengeData = {
  internalName: string,
  title: string, 
  desc: string
}

const language = getChosenLanguage();

/**
 * Change a challenge string to something else from the ChallengeResources json array.
 * 
 * @param resourceKey The resourceId to be changed.
 */
export const $$Challenge = (resourceKey: ChallengeResourceKey): sanitizedChallengeData => {
    let resource: any = resourceKey;

    if (ChallengeResources[resourceKey]) {
      resource = ChallengeResources[resourceKey];
    }
    else return { internalName: "", title: "", desc: ""};

    let languageData = resource[language];

    let sanitizedValues: sanitizedChallengeData = {
      internalName: resource["internalName"],
      title: (languageData && languageData.title && languageData.title !== undefined) ? languageData.title : "undefined",
      desc: (languageData && languageData.desc && languageData.desc !== undefined) ? languageData.desc : "undefined",
    }

    return sanitizedValues;
}

/**
 * Change a string to something else from the StringResources json array.
 *  
 * How to use: 
 * 
 * Regular string: $$("options.languageSelectorTitle") => This will output "Options" in english.
 * 
 * String with variable: $$("wallet.cash", {cash: variableToReplaceWith || 0}) => This will output "Cash: {variableToReplaceWith}$" in english.
 * 
 * If you want to add a new resource please use the blank replacer like this. {$$("", {var: "Text you want to write"})}.
 * This is so i can integrate it into our i18n system and upload them to POE
 * 
 * @param resourceKey The resourceId to be changed.
 * @param parameters Used for putting in variables to change inside the returnstring.
 */
export const $$ = (resourceKey: StringResourceKey, parameters?: {}): string => {
  let resource: any = resourceKey;

  if (StringResources[resourceKey]) {
    resource = StringResources[resourceKey];
  }

  let localizedString = resource[language] !== "undefined" ? resource[language] : resource["en"];

  if (parameters) {
    for (const key in parameters) {
      localizedString = localizedString.replace(new RegExp("\\{" + key + "\\}", "gi"), parameters[key]);
    }
  }

  return localizedString;
}
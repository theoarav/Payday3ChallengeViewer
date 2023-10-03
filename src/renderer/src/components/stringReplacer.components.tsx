import { StringResourceKey, StringResources } from "../assets/StringResources"

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


//Can be used for checking how many api challenges has no game variants paired.
export const checkForMissingTranslations = (): string => {
  let number = 0;

  for (let resource in StringResources) {
    let data = StringResources[resource];
    if(data.game.title === "" || data.game.desc === "") number ++;
  }

  return number+" challenges have missing resourceString pairs!";
}


/**
 * Change a string to something else from a json array.
 * 
 * @param resourceKey The resourceId to be changed.
 */
export const $$ = (resourceKey: StringResourceKey): internalizedChallenge => {
    let replacedValues: any = resourceKey;

    if (StringResources[resourceKey]) {
        replacedValues = StringResources[resourceKey];
    }
    else replacedValues = "{}";
    return replacedValues;
}
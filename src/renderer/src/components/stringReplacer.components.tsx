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

export type sanitizedChallengeData = {
  internalName: string,
  title: string, 
  desc: string
}

/**
 * Change a string to something else from a json array.
 * 
 * @param resourceKey The resourceId to be changed.
 */
export const $$ = (resourceKey: StringResourceKey, language: string): sanitizedChallengeData => {
    let resource: any = resourceKey;

    if (StringResources[resourceKey]) {
      resource = StringResources[resourceKey];
    }
    else return { internalName: "", title: "", desc: ""};

    let sanitizedValues: sanitizedChallengeData = {
      internalName: resource["internalName"],
      title: resource[language].title,
      desc: resource[language].desc,
    }

    return sanitizedValues;
}
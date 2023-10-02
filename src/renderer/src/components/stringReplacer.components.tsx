import { StringResourceKey, StringResources } from "../assets/StringResources"

export type internalizedChallenge = 
{
  api: {title: string, desc: string},
  game: {title: string, desc: string}
}


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
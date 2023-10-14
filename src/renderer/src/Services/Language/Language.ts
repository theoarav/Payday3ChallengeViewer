import { DEFAULT_LANGUAGE, LANGUAGE } from "../auth.service"

export const getChosenLanguage = (): string => {
    return localStorage.getItem(LANGUAGE) || DEFAULT_LANGUAGE
  }
  
  export const saveChosenLanguage = (language): void => {
    localStorage.setItem(LANGUAGE, language)
  }
  
  export const deleteChosenLanguage = (): void => {
    localStorage.removeItem(LANGUAGE)
  }

export { DEFAULT_LANGUAGE }
  
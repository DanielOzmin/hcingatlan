import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./Locates/en.json"
import hu from "./Locates/hu.json"
import de from "./Locates/de.json"
import sk from "./Locates/sk.json"

const resources = {
    en: {translation: en },
    hu: {translation: hu},
    de: {translation: de},
    sk: {translation: sk}
}

i18n.use(initReactI18next).init({resources,lng: "hu",fallbackLng:"hu",interpolation:{escapeValue:false}})
    
export default i18n
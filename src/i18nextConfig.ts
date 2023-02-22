import translationEnglish from './core/locales/en/translation.json'
import translationUkrainian from './core/locales/uk/translation.json'
import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'

const resources = {
  en: {
    translation: translationEnglish,
  },
  uk: {
    translation: translationUkrainian,
  },
}

i18next.use(initReactI18next).init({
  resources: resources,
  lng: localStorage.getItem('lng') || 'uk',
})

export default i18next

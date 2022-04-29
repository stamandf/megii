import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          navMenu: {
              properties: 'Properties',
              brokers: 'Brokers',
              testimonials: 'Testimonials',
              contact: 'Contact Us',
              lang: 'FR'
          },
          message: {
            button1: 'Under Contruction',
            button2: 'Coming soon!'
          }
        }
      },
      fr: {
        translation: {
          // here we will place our translations...
          navMenu: {
              properties: 'Propriétés',
              brokers: 'Courtiers',
              testimonials: 'Témoignages',
              contact: 'Nous joindre',
              lang: 'EN'
          },
          message: {
            button1: 'En Contruction',
            button2: 'À bientôt!'
          }
        }
      }
    }
  });

export default i18n;
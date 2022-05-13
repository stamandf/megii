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
          },
          sectionTeam: {
            ourTeam: 'Our Team',
            ourTeamMsg: 'Our brokers are here to serve you ethically, with courtesy, professionalism and dignity. Call us today!'
          },
          brokerTitle: {
            erosGreatti: 'Certified Residential and Commercial Real Estate Broker AEO',
            denisCherkashin: 'Residential and Commercial Real Estate Broker'
          },
          footer: {
            siteLinks: 'Site Links',
            socials: 'Socials',
            ourMissionTitle: 'Our Mission',
            ourMissionText: 'Promote the highest ethical and professional standards and collaboration among our members.  Ensure a smooth process and positive experience in the purchase or sale of your home and properties.',
            copyright: 'All rights reserved',
            address1:'274-729 Bourget Street',
            address2:'Montreal, Quebec H4C 2M6'
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
          },
          sectionTeam: {
            ourTeam: 'Notre équipe',
            ourTeamMsg: 'Nos courtiers vous servent de manière éthique, courtoise, professionnalle, et avec dignité. Appelez-nous dès aujourd\'hui!'
          },
          brokerTitle: {
            erosGreatti: 'Courtier immobilier résidentiel et commercial agréé DA',
            denisCherkashin: 'Courtier immobilier résidentiel et commercial'
          },
          footer: {
            siteLinks: 'Liens du site',
            socials: 'Sociaux',
            ourMissionTitle: 'Notre mission',
            ourMissionText: 'Promouvoir des normes élevées de manières éthiques et professionnelles et de collaboration entre nos membres. Assurez que le processus d\'achat ou de vente de votre maison et de vos propriétés se fasse de manière fluide et agréable.',
            copyright:'Tous droits réservés',
            address1:'274-729, rue Bourget',
            address2:'Montréal (Québec) H4C 2M6'
          }
        }
      }
    }
  });

export default i18n;
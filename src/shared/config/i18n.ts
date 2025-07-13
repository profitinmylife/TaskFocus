import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../translation/en.json';
import ruTranslations from '../translation/ru.json';

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: enTranslations,
        ru: ruTranslations,
    },
    defaultNS: 'common',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
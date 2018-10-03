import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import es from './lang/es.json';
import en from './lang/en.json';

i18n.locale=RNLanguages.language;
i18n.fallbacks=true;
//i18n.defaultLocale='es';
i18n.translate = {en, es};

export default i18n;
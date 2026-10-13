import en from "./locales/en.json";
import es from "./locales/es.json";

import {createI18n} from "vue-i18n";

/**
 * shared internationalization service with english as default locale
 */
const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {en, es}
});

export default i18n;

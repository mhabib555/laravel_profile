import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          //English translations here
          "homepage main title": "Welcome to Profile Viewer",

        },
      },
      fr: {
        translation: {
          //french translations here
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;
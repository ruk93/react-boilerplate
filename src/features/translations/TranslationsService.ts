import { injectable } from "inversify";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const TranslationsServiceType = Symbol.for("TranslationsService");

@injectable()
class TranslationsService {
  private i18n: typeof i18n;

  constructor() {
    this.i18n = i18n;
  }

  init() {
    this.i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: {
            "hello-world.toast.success": "Hello World",
            "hello-world.notify-me": "Notify Me",
          },
        },
        de: {
          translation: {
            "hello-world.toast.success": "Halo Welt",
            "hello-world.notify-me": "Benachrichtige mich",
          },
        },
      },
      lng: "de",
      interpolation: {
        escapeValue: false,
      },
    });
  }

  changeLanguage(lng: string) {
    this.i18n.changeLanguage(lng, () => {
      this.i18n.reloadResources();
    });
  }
}
export default TranslationsService;

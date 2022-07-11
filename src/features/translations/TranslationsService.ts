import { inject, injectable } from "inversify";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ConfigStoreType } from "../../di/types";
import ConfigStore from "../config/stores/ConfigStore";
import { computed } from "mobx";
@injectable()
class TranslationsService {
  private i18n: typeof i18n;

  @inject(ConfigStoreType)
  configStore !: ConfigStore;

  constructor() {
    this.i18n = i18n;
  }

  @computed
  get defaultLanguage(){
    return this.configStore.config.defaultLanguage;
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
      lng: this.defaultLanguage,
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

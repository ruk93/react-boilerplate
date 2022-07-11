import { ContainerModule, interfaces } from "inversify";
import { TranslationsServiceType } from "../../di/types";
import TranslationsService from "./TranslationsService";

const diModules = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<TranslationsService>(TranslationsServiceType)
      .to(TranslationsService)
      .inSingletonScope();
  }
);

export default diModules;

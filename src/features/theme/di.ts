import { ContainerModule, interfaces } from "inversify";
import { ThemeStoreType } from "../../di/types";
import ThemeStore from "./stores/ThemeStore";

const diModules = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<ThemeStore>(ThemeStoreType).to(ThemeStore).inSingletonScope();
  }
);

export default diModules;

import { ContainerModule, interfaces } from "inversify";
import { ConfigStoreType } from "../../di/types";
import ConfigStore from "./stores/ConfigStore";

const diModules = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<ConfigStore>(ConfigStoreType).to(ConfigStore).inSingletonScope();
  }
);

export default diModules;

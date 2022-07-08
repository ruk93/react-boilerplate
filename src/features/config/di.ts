import { ContainerModule, interfaces } from "inversify";
import ConfigStore, { ConfigStoreType } from "./stores/ConfigStore";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<ConfigStore>(ConfigStoreType).to(ConfigStore);
});
    
export default diModules;
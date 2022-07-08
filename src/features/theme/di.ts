import { ContainerModule, interfaces } from "inversify";
import ThemeStore, { ThemeStoreType } from "./stores/ThemeStore";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<ThemeStore>(ThemeStoreType).to(ThemeStore);
});
    
export default diModules;
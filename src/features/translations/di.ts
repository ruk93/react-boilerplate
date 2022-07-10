import { ContainerModule, interfaces } from "inversify";
import TranslationsService, { TranslationsServiceType } from "./TranslationsService";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<TranslationsService>(TranslationsServiceType).to(TranslationsService);
});
    
export default diModules;
import { ContainerModule, interfaces } from "inversify";
import ApiService, { ApiServiceType } from "./ApiService";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<ApiService>(ApiServiceType).to(ApiService);
});
    
export default diModules;
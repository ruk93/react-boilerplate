import { ContainerModule, interfaces } from "inversify";
import { ApiServiceType } from "../../di/types";
import ApiService from "./ApiService";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<ApiService>(ApiServiceType).to(ApiService);
});
    
export default diModules;
import { ContainerModule, interfaces } from "inversify";
import NotificationStore, { NotificationStoreType } from "./stores/NotificationStore";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<NotificationStore>(NotificationStoreType).to(NotificationStore);
});
    
export default diModules;
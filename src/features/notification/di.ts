import { ContainerModule, interfaces } from "inversify";
import NotificationService, { NotificationServiceType } from "./NotificationService";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<NotificationService>(NotificationServiceType).to(NotificationService);
});
    
export default diModules;
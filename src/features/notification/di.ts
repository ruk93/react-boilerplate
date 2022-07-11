import { ContainerModule, interfaces } from "inversify";
import { NotificationServiceType } from "../../di/types";
import NotificationService from "./NotificationService";

const diModules = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<NotificationService>(NotificationServiceType)
      .to(NotificationService)
      .inSingletonScope();
  }
);

export default diModules;

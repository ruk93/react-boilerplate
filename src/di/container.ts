import { Container } from "inversify";
import ThemeModules from "../features/theme/di";
import ConfigModules from "../features/config/di";
import ApiServiceModules from "../features/api/di";
import NotificationModules from "../features/notification/di";
import TranslationsModules from "../features/translations/di";
// make:feature module-import

let container = new Container({ defaultScope: "Singleton" });
container.load(ThemeModules);
container.load(ConfigModules);
container.load(ApiServiceModules);
container.load(NotificationModules);
container.load(TranslationsModules);
// make:feature module-load

export default container;

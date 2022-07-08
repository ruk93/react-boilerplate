import { Container } from "inversify";
import ThemeModules from "../features/theme/di";
import ConfigModules from "../features/config/di";
import ApiServiceModules from "../features/apiService/di";
// make:feature module-import

let container = new Container({ defaultScope: "Singleton" });
container.load(ThemeModules);
container.load(ConfigModules);
container.load(ApiServiceModules);
// make:feature module-load

export default container;

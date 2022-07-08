import { Container } from "inversify";
import ThemeModules from "../features/theme/di";
// make:feature module-import

let container = new Container({ defaultScope: "Singleton" });
container.load(ThemeModules);
// make:feature module-load

export default container;

import { Container } from "inversify";
import todoModules from "../features/todo/di";
// make:feature module-import

let container = new Container({ defaultScope: "Singleton" });
container.load(todoModules);
// make:feature module-load

export default container;

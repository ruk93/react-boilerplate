import { Container } from "inversify";
import todoModules from "../features/todo/di";

let container = new Container({ defaultScope: "Singleton" });
container.load(todoModules);

export default container;

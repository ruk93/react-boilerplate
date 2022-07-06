import { ContainerModule, interfaces } from "inversify";
import TodoStore, { TodoStoreServiceType } from "./stores/TodoStore";

const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<TodoStore>(TodoStoreServiceType).to(TodoStore);
});

export default diModules;
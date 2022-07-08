import { Container } from "inversify";
// make:feature module-import

let container = new Container({ defaultScope: "Singleton" });
// make:feature module-load

export default container;

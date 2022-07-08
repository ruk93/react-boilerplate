#!/usr/bin/env node
const changeCase = require("change-case");
const fs = require("fs");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const storeTemplate = (name: string) => {
  return `import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
    
export const ${name}StoreType = Symbol.for("${name}Store");
    
@injectable()
class ${name}Store {

    @observable sample:string = "";

    constructor(){
        makeObservable(this);
    }

    @action
    setSample(content:string){
        this.sample = content;
    }
}
export default ${name}Store;`;
};

const diModuleTemplate = (name: string) => {
  return `import { ContainerModule, interfaces } from "inversify";
import ${name}Store, { ${name}StoreType } from "./stores/${name}Store";
    
const diModules = new ContainerModule((bind: interfaces.Bind, unbind : interfaces.Unbind) => {
    bind<${name}Store>(${name}StoreType).to(${name}Store);
});
    
export default diModules;`;
};

const moduleImportTemplate = (name: string) => {
  const pascalCase = changeCase.pascalCase(name);
  const camelCase = changeCase.camelCase(name);
  return `import ${pascalCase}Modules from "../features/${camelCase}/di";
// make:feature module-import`;
};

const moduleLoadTemplate = (name: string) => {
  const pascalCase = changeCase.pascalCase(name);
  return `container.load(${pascalCase}Modules);
// make:feature module-load`;
};

const schemaImportTemplate = (name: string) => {
  const pascalCase = changeCase.pascalCase(name);
  const camelCase = changeCase.camelCase(name);
  return `import ${pascalCase}Store from "../features/${camelCase}/stores/${pascalCase}Store";
// make:feature schema-import`;
};

const schemaExportTemplate = (name: string) => {
  const pascalCase = changeCase.pascalCase(name);
  return `// make:feature schema-export
export type { ${pascalCase}Store };`;
};

const typeExportTemplate = (name: string) => {
  const pascalCase = changeCase.pascalCase(name);
  const camelCase = changeCase.camelCase(name);
  return `// make:feature type-export
export { ${pascalCase}StoreType } from "../features/${camelCase}/stores/${pascalCase}Store";`;
};

const replaceContent = (file: string, search: string, content: string) => {
  const data = fs.readFileSync(file, "utf8");
  const replacedContent = data.replace(search, content);
  fs.writeFileSync(file, replacedContent);
};

const makeFeature = (name: string) => {
  const pascalCase = changeCase.pascalCase(name);
  const camelCase = changeCase.camelCase(name);
  fs.mkdirSync(`${__dirname}/../../src/features/${camelCase}/stores/`, {
    recursive: true,
  });
  fs.writeFileSync(
    `${__dirname}/../../src/features/${camelCase}/stores/${pascalCase}Store.ts`,
    storeTemplate(pascalCase)
  );
  fs.writeFileSync(
    `${__dirname}/../../src/features/${camelCase}/di.ts`,
    diModuleTemplate(pascalCase)
  );

  //append & prepend modules to container
  replaceContent(
    `${__dirname}/../../src/di/container.ts`,
    "// make:feature module-import",
    moduleImportTemplate(name)
  );
  replaceContent(
    `${__dirname}/../../src/di/container.ts`,
    "// make:feature module-load",
    moduleLoadTemplate(name)
  );

  //connect types to the schema file
  replaceContent(
    `${__dirname}/../../src/di/schema.ts`,
    "// make:feature schema-import",
    schemaImportTemplate(name)
  );
  replaceContent(
    `${__dirname}/../../src/di/schema.ts`,
    "// make:feature schema-export",
    schemaExportTemplate(name)
  );

  //connect store-types to the types file
  replaceContent(
    `${__dirname}/../../src/di/types.ts`,
    "// make:feature type-export",
    typeExportTemplate(name)
  );
};

type Args = {
  name: string;
};
const init = (args: Args) => {
  if (!args.name || typeof args.name !== "string") {
    throw new Error("Name not found");
  }
  makeFeature(args.name.trim());
};

init(argv);

import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
    
export const ConfigStoreType = Symbol.for("ConfigStore");
    
@injectable()
class ConfigStore {

    @observable sample:string = "";

    constructor(){
        makeObservable(this);
    }

    @action
    setSample(content:string){
        this.sample = content;
    }
}
export default ConfigStore;
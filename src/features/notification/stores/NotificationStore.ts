import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
    
export const NotificationStoreType = Symbol.for("NotificationStore");
    
@injectable()
class NotificationStore {

    @observable sample:string = "";

    constructor(){
        makeObservable(this);
    }

    @action
    setSample(content:string){
        this.sample = content;
    }
}
export default NotificationStore;
import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";

type TodoItem = {
    id: number,
    content: string
}

export const TodoStoreServiceType = Symbol.for("TodoStore");

export interface ITodoStore {

    addTodo(content:string) : void
    upsertTodos():void

}

@injectable()
class TodoStore implements ITodoStore {
    @observable todos: Array<TodoItem> = [];

    constructor(){
        makeObservable(this);
    }
    upsertTodos(): void {
        throw new Error("Method not implemented.");
    }

    @action
    addTodo(content:string){
        this.todos = [...this.todos, {id : 1, content}];
    }
}
export default TodoStore;
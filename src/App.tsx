import "reflect-metadata";
import React, { useState } from "react";
import container from "./di/container";
import { observer } from "mobx-react";
import { TodoStore } from "./di/schema";
import { TodoStoreServiceType } from "./di/types";

const App = () => {
  const [content, setContent] = useState<string>("");
  const todoStore = container.get<TodoStore>(TodoStoreServiceType);

  const addTodo = () => {
    todoStore.addTodo(content);
  };

  return (
    <div data-testid="app">
      <section>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
          type="text"
        />
        <button onClick={addTodo}>Add Todo </button>
      </section>
      <section>
        {todoStore.todos.map((i) => (
          <h3 key={i.content}>{i.content}</h3>
        ))}
      </section>
    </div>
  );
};

export default observer(App);

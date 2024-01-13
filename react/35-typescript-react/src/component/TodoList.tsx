import { useState } from "react";
import { TodoItemProp } from "../types/types";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState<TodoItemProp[]>([
    {
      id: 1,
      content: "첫 메모",
      completed: false,
    },
    {
      id: 2,
      content: "두 번쨰 메모",
      completed: true,
    },
  ]);

  const [newTodos, setNewTodos] = useState<string>("");
  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), content: newTodos, completed: false },
    ];
    setTodos(updatedTodos);
  };

  const toggleTodo = (targetId: number) => {
    const updatedTodo = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodo);
    console.log(updatedTodo);
  };

  return (
    <>
      <h1>Todo LIst</h1>
      <input
        type="text"
        value={newTodos}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodos(e.target.value)
        }
      />
      <button onClick={addTodo}>add</button>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
          ></TodoItem>
        );
      })}
    </>
  );
}

export default TodoList;

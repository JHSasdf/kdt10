import { TodoItemProp } from "../types/types";

interface Props {
    todo: TodoItemProp;
    toggleTodo: (id: number) => void
}
function TodoItem({ todo, toggleTodo }: Props) {
  return (
    <>
      <li>
        <label htmlFor="checkboox">{todo.content}</label>
        <input id="checkbox" type="checkbox" defaultChecked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      </li>
    </>
  );
}

export default TodoItem;

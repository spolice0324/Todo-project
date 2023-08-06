import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

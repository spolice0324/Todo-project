import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, onDestroy }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          onDestroy={onDestroy}
        />
      ))}
    </ul>
  );
}

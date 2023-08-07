import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, onDestroy, filteredTodos }) {
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDestroy={onDestroy}
          todos={todos}
          
          
        />
      ))}
    </ul>
  );
}

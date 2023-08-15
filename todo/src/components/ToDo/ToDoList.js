import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({
  todos,
  onDestroy,
  filteredTodos,
  setTodos,
}) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleToggleAll = () => {
    setIsAllChecked(!isAllChecked);
    const nextTodos = todos.map((todo) => ({
      ...todo,
      completed: !isAllChecked,
    }));
    setTodos(nextTodos, () => {
      localStorage.setItem("todos", JSON.stringify(nextTodos));
    });
  };

  return (
    <section>
      <input
        id="toggle-all"
        type="checkbox"
        className="toggle-all absolute text-center opacity-0 border-none  "
        checked={isAllChecked}
        onChange={handleToggleAll}
        onClick={() => setIsAllChecked(!isAllChecked)}
      />
      <label
        htmlFor="toggle-all"
        className="toggle-all absolute w-[60px] h-[34px] -top-[52px] -left-[13px] rotate-90 text-transparent"
      >
        {isAllChecked}
      </label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDestroy={onDestroy}
            todos={todos}
            setTodos={setTodos}
            isChecked={isAllChecked || todo.completed}
          />
        ))}
      </ul>
    </section>
  );
}

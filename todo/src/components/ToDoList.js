import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos }) {
  return (
    <>
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;

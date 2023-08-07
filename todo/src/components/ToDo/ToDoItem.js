import React, { useState } from "react";

export default function ToDoItem({ todo, onDestroy, todos, setTodos }) {
  const { id, text, completed } = todo;

  const onChangeCheckbox = () => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(nextTodos);
  };

  return (
    <>
      <li className="todo-item relative p-[15px] block border border-gray-100 font-thin text-2xl">
        <div className="view">
          <input
            type="checkbox"
            className="toggle mr-5"
            checked={completed}
            onChange={onChangeCheckbox}
          ></input>
          <label>{text}</label>
          <button
            className="destroy  float-right pr-2 text-red-600 hover:block hidden hover:text-red-800  hover: transition-all duration-300 ease-in-out"
            onClick={() => onDestroy(id)}
          >
            x
          </button>
        </div>
        <input className="edit hidden" type="text" placeholder="수정창 " />
      </li>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDoFooter({
  todos,
  onClearCompleted,
  selected,
  setSelected,
  filteredTodos,
}) {
  const activeTodoCount =filteredTodos.filter((todo) => !todo.completed).length;
  const itemWord = activeTodoCount === 1 ? "item" : "items";

  const liStyle =
    "inline-block mx-4  text-gray-500 font-thin rounded-sm border hover:border-gray-200 ";
  const selectedStyle = "border-red-200";

  

  return (
    <>
      <footer className="footer block p-2 text-center border-t border-solid font-thin">
        <span className="todo-count relative mx-3 float-left text-left text-gray-500 font-thin">
          <strong className="todo-num font-thin">{activeTodoCount}</strong>{" "}
          {itemWord} left
        </span>
        <ul className="filters inline-block right-0 left-0  font-thin  ">
          <li
            className={`${liStyle} ${
              selected === "all" ? selectedStyle : "border-transparent"
            }`}
          >
            <Link to="/#/" onClick={() => setSelected("all")}>
              All
            </Link>
          </li>
          <li
            className={`${liStyle} ${
              selected === "active" ? selectedStyle : "border-transparent"
            }`}
          >
            <Link to="/#/active" onClick={() => setSelected("active")}>
              Active
            </Link>
          </li>
          <li
            className={`${liStyle} ${
              selected === "completed" ? selectedStyle : "border-transparent"
            }`}
          >
            <Link to="/#/completed" onClick={() => setSelected("completed")}>
              Completed
            </Link>
          </li>
        </ul>
        <button
          className="clear-complete mx-2 cursor-pointer float-right  text-gray-500"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}

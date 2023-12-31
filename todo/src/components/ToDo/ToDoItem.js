import React, { useEffect, useState } from "react";
export default function ToDoItem({
  todo,
  onDestroy,
  todos,
  setTodos,
  isChecked,
}) {
  const { id, text, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const onChangeCheckbox = () => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(nextTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDoubleClick = () => {
    setIsEditing(true);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmedText = editedText.trim();
      if (trimmedText !== "") {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, text: trimmedText } : todo
          )
        );
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        onDestroy(id);
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setIsEditing(false);
      setEditedText(text);
    }
  };

  return (
    <>
      <li
        className={`todo-item relative p-[15px] block border border-gray-100 font-thin text-2xl ${
          isChecked ? "completed" : ""
        } ${isEditing ? "editing" : ""}`}
      >
        <div className="view">
          <input
            type="checkbox"
            className="toggle cursor-pointer"
            checked={isChecked}
            onChange={onChangeCheckbox}
          ></input>
          {isEditing ? (
            <input
              className="edit pl-3"
              type="text"
              value={editedText}
              placeholder="Edit the Text "
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={onKeyDown}
              autoFocus
            />
          ) : (
            <label
              onDoubleClick={onDoubleClick}
              className={`pl-3 transition-colors duration-400 ${
                completed ? "line-through text-gray-400" : "text-black"
              }`}
            >
              {text}
            </label>
          )}
          <button
            className="destroy float-right pr-2 text-red-600 hover:block hidden hover:text-red-800  hover: transition-all duration-300 ease-in-out"
            onClick={() => {
              onDestroy(id);
              localStorage.setItem(
                "todos",
                JSON.stringify(todos.filter((todo) => todo.id !== id))
              );
            }}
          >
            x
          </button>
        </div>
      </li>
    </>
  );
}

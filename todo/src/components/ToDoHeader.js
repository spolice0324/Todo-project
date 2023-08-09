import React, { useState } from "react";

export default function ToDoHeader({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const onSubmit = (e) => {
    onInsert(value);
    setValue("");

    e.preventDefault();
  };

  return (
    <header className="todo-header relative block ">
      <h1 className="todo-todos absolute block -top-[100px] w-full text-7xl font-thin text-center text-red-200">
        todos
      </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          className="new-todo w-full relative pl-[55px] py-[16px] border-none shadow-md bg-opacity-5 italic text-2xl font-thin text-gray-500 outline-none"
          placeholder="What needs to be done?"
          autoFocus
        />
        <button type="submit"></button>
      </form>
    </header>
  );
}

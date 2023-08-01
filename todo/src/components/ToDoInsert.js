import React, { useState } from "react";

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(value);
    setValue("");
    e.preventDefault();
  };

  return (
    <div>
      <form className="todo-insert" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요."
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default TodoInsert;

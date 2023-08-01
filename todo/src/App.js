import React, { useState, useRef } from "react";
import "./App.css";
import ToDoContainer from "components/ToDoContainer";
import TodoInsert from "components/ToDoInsert";
import ToDoList from "components/ToDoList";
import ToDoItem from "components/ToDoItem";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "첫번째 투두 리스트 아이템",
      completed: true,
    },
    {
      id: 2,
      text: "두번째 투두 리스트 아이템",
      completed: true,
    },
    {
      id: 3,
      text: "세번째 투두 리스트 아이템",
      completed: false,
    },
  ]);

  const nextId = useRef(4); 
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,

      text,
      completed: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current++;
    console.log("onInsert : ", text);
  };

  return (
    <>
      <ToDoContainer>
        <TodoInsert onInsert={onInsert} />
        <ToDoList todos={todos}>
          <ToDoItem />
        </ToDoList>
      </ToDoContainer>
    </>
  );
}

export default App;

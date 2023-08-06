import { useState, useRef } from "react";
import ToDoMain from "./ToDoMain";
import ToDoFooter from "./ToDoFooter";
import ToDoHeader from "./ToDoHeader";

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const newTodo = useRef(0);

  const onInsert = (text) => {
    const todo = {
      id: newTodo.current,
      text,
      completed: false,
    };
    setTodos(todos.concat(todo));
    newTodo.current++;
  };

  const onDestroy = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };



  return (
    <section className="todo-app absolute m-auto my-[130px] mx-[40px] bg-white text-base leading-5 min-w-[230px] max-w-[550px] shadow-md border-solid border  ">
      <ToDoHeader todos={todos} onInsert={onInsert} />
      <ToDoMain todos={todos} onDestroy={onDestroy} />
      <ToDoFooter todos={todos} onClearCompleted={onClearCompleted}/>
    </section>
  );
}

export default ToDoApp;

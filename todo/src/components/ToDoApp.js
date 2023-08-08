import { useState, useRef } from "react";
import ToDoMain from "./ToDoMain";
import ToDoFooter from "./ToDoFooter";
import ToDoHeader from "./ToDoHeader";

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const newTodo = useRef(0);
  const [selected, setSelected] = useState("all");

  const getFilteredTodos = () => {
    switch (selected) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  const onInsert = (text) => {
    if (text.trim() !== "") {
      const todo = {
        id: newTodo.current,
        text,
        completed: false,
      };
      setTodos(todos.concat(todo));
      newTodo.current++;
    }
  };

  const onDestroy = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const hasTodos = todos.length > 0;

  return (
    <section className="todo-app relative m-auto my-[200px] mx-[100px] bg-white text-base leading-5 min-w-[230px] max-w-[550px] shadow-md border-solid border  ">
      <ToDoHeader todos={todos} onInsert={onInsert} />
      <ToDoMain
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        onDestroy={onDestroy}
        selected={selected}
        setSelected={setSelected}
      />
      {hasTodos && (
        <>
          <ToDoFooter
            todos={todos}
            setTodos={setTodos}
            selected={selected}
            setSelected={setSelected}
            onClearCompleted={onClearCompleted}
            filteredTodos={filteredTodos}
          />
        </>
      )}
    </section>
  );
}

export default ToDoApp;

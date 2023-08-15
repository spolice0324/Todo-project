import { useState, useRef, useEffect } from "react";
import ToDoMain from "./ToDoMain";
import ToDoFooter from "./ToDoFooter";
import { useLocation } from "react-router-dom";
import ToDoHeader from "./ToDoHeader";

function ToDoApp() {
  const selected = useLocation().pathname?.split("/")[1] || "all";

  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      return storedTodos;
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
        id: todos.length,
        text,
        completed: false,
      };
      setTodos((todos) => todos.concat(todo));
    }
  };

  const onDestroy = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
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
      />
      {hasTodos && (
        <>
          <ToDoFooter
            todos={todos}
            setTodos={setTodos}
            selected={selected}
            onClearCompleted={onClearCompleted}
            filteredTodos={filteredTodos}
          />
        </>
      )}
    </section>
  );
}

export default ToDoApp;

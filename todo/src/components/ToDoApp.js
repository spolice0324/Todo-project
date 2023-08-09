import { useState, useRef, useEffect } from "react";
import ToDoMain from "./ToDoMain";
import ToDoFooter from "./ToDoFooter";
import ToDoHeader from "./ToDoHeader";

function ToDoApp() {
  const newTodo = useRef(0);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
      newTodo.current = storedTodos.length;
    }
  }, []);
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      newTodo.current = storedTodos.length;
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
        id: newTodo.current,
        text,
        completed: false,
      };
      const newTodos = todos.concat(todo);
      setTodos(newTodos);
      newTodo.current++;
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

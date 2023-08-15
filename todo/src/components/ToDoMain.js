import ToDoList from "./ToDo/ToDoList";

export default function ToDoMain({
  todos,
  setTodos,
  onDestroy,
  filteredTodos,
  selected,
}) {
  return (
    <>
      <section className="main relative z-2 ">
        <ToDoList
          todos={todos}
          setTodos={setTodos}
          onDestroy={onDestroy}
          filteredTodos={filteredTodos}
          selected={selected}
        />
      </section>
    </>
  );
}

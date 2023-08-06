import ToDoList from "./ToDo/ToDoList";

export default function ToDoMain({ todos, onDestroy }) {
  return (
    <>
      <section className="main relative z-2 ">
        <ToDoList todos={todos} onDestroy={onDestroy} />
      </section>
    </>
  );
}

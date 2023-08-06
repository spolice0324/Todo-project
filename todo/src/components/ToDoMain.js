import ToDoList from "./ToDo/ToDoList";

export default function ToDoMain({ todos }) {
  return (
    <>
      <section className="main relative z-2 border-solid ">
        <input id="toggle-all" type="checkbox" className="toggle-all" />
        <label htmlFor="toggle-all" />
        <ToDoList todos={todos} />
      </section>
    </>
  );
}

import TodoItem from "./TodoItem";

export default function ToDoMain() {
  return (
    <>
      <section className="main relative z-2 border-solid ">
        <input id="toggle-all" type="checkbox" className="toggle-all" />
        <label htmlFor="toggle-all" />
        <ul className="todo-list">
          <TodoItem />
        </ul>
      </section>
    </>
  );
}



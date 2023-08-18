import { Link } from "react-router-dom";

export default function ToDoFooter({
  onClearCompleted,
  selected,
  filteredTodos,
}) {
  const activeTodoCount = filteredTodos.filter(
    (todo) => !todo.completed
  ).length;
  const itemWord = activeTodoCount === 1 ? "item" : "items";

  const liStyle =
    "inline-block mx-2 ml-1 text-gray-500 font-thin rounded-sm border hover:border-gray-200 ";
  const selectedStyle = "border-red-200";

  return (
    <>
      <footer className="footer block p-3 text-center border-t border-solid font-thin shadow-lg">
        <span className="todo-count relative  float-left text-left text-gray-500 font-thin">
          <strong className="todo-num px-1 font-thin">{activeTodoCount}</strong>{" "}
          {itemWord} left
        </span>
        <ul className="filters  px-1 inline-block right-0 left-0  font-thin  ">
          <li
            className={`${liStyle} ${
              selected === "all" ? selectedStyle : "border-transparent"
            }`}
          >
            <Link to="/">
              All
            </Link>
          </li>
          <li
            className={`${liStyle} ${
              selected === "active" ? selectedStyle : "border-transparent"
            }`}
          >
            <Link to="/active">
              Active
            </Link>
          </li>
          <li
            className={`${liStyle} ${
              selected === "completed" ? selectedStyle : "border-transparent"
            }`}
          >
            <Link to="/completed">
              Completed
            </Link>
          </li>
        </ul>
        <button
          className={`clear-complete absolute cursor-pointer float-right ml-2 my-0.5 text-gray-500 ${
            filteredTodos.some((todo) => todo.completed) ? "" : "hidden"
          }`}
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}

import { NavLink } from "react-router-dom";

export default function ToDoFooter() {
  const liStyle =
    "inline-block mx-4  text-gray-500 font-thin rounded-sm border border-transparent hover:border-gray-200 ";
  const selectedStyle = "border border-red-200 rounded-sm";

  return (
    <>
      <footer className="footer block p-2 text-center border-t border-solid font-thin">
        <span className="todo-count relative mx-3 float-left text-left text-gray-500 font-thin">
          <strong className="todo-num font-thin">0</strong> items left
        </span>
        <ul className="filters inline-block right-0 left-0  font-thin  ">
          <li className={liStyle}>
            <NavLink
              exact={"true"}
              to="/"
              className={({ isActive }) => (isActive ? selectedStyle : "")}
            >
              All
            </NavLink>
          </li>
          <li className={liStyle}>
            <NavLink
              to="/active"
              className={({ isActive }) => (isActive ? selectedStyle : "")}
            >
              Active
            </NavLink>
          </li>
          <li className={liStyle}>
            <NavLink
              to="/completed"
              className={({ isActive }) => (isActive ? selectedStyle : "")}
            >
              Completed
            </NavLink>
          </li>
        </ul>
        <button className="clear-complete mx-2 cursor-pointer float-right ">
          Clear completed
        </button>
      </footer>
    </>
  );
}

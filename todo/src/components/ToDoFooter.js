import { NavLink } from "react-router-dom";

export default function ToDoFooter() {
  const unSelectedStyle = " inline-block pl-3 rounded-sm ";
  const selectedStyle = "   rounded-sm border border-solid border-red-200 p-1 ";

  return (
    <>
      <footer className="footer block footer py-[10px]  h-[20px] text-center border-t border-gray-300 font-thin">
        <span className="todo-count abosolute float-left text-left text-gray-500 font-thin">
          <strong className="todo-num  font-thin">0</strong> items left
        </span>
        <ul className="filters inline-block right-0 left-0 font-thin p-0.5">
          <li className={unSelectedStyle}>
            <NavLink
              exact={"true"}
              to="/"
              className={({ isActive }) => (isActive ? selectedStyle : "")}
            >
              All
            </NavLink>
          </li>
          <li className={unSelectedStyle}>
            <NavLink
              to="/active"
              className={({ isActive }) => (isActive ? selectedStyle : "")}
            >
              Active
            </NavLink>
          </li>
          <li className={unSelectedStyle}>
            <NavLink
              to="/completed
            "
              className={({ isActive }) => (isActive ? selectedStyle : "")}
            >
              Completed
            </NavLink>
          </li>
        </ul>
        <button className="clear-complete relative cursor-pointer float-right ">
          Clear completed
        </button>
      </footer>
    </>
  );
}

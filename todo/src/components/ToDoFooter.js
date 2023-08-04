import { NavLink } from "react-router-dom";

export default function ToDoFooter() {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>0</strong> items left
        </span>
        <ul className="filters">
          <li>
            <NavLink exact={true} to="/" activeClassName="selected">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/active" activeClassName="selected">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeClassName="selected">
              Completed
            </NavLink>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  );
}

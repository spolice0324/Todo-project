function ToDoItem({ todo }) {
  const { id, text, completed } = todo;
  return (
    <>
      <li className="todo-item">
        <input type="checkbox" id={`todo-${id}`} defaultChecked={completed} />

        <label htmlFor={`todo-${id}`}>{text}</label>
        <button className="remove-todo">삭제</button>
      </li>
    </>
  );
}

export default ToDoItem;

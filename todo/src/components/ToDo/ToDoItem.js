export default function ToDoItem({ todo }) {
  const { id, text, completed } = todo;
  return (
    <>
      <li className="todo-item">
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            defaultChecked={completed}
          ></input>
          <label>{text}</label>
          <button className="destroy"> x</button>
        </div>
        <input className="edit" type="text" placeholder="수정창 " />
      </li>
    </>
  );
}

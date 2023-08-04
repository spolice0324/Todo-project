export default function TodoItem() {
  return (
    <>
      <li>
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>Todo Item</label>
          <button className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>
    </>
  );
}

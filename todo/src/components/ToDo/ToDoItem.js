export default function ToDoItem({ todo, onDestroy }) {
  const { id, text, completed } = todo;

  return (
    <>
      <li className="todo-item relative p-[15px] block border border-gray-100 font-thin text-2xl">
        <div className="view">
          <input
            type="checkbox"
            className="toggle mr-5"
            defaultChecked={completed}
          ></input>
          <label>{text}</label>
          <button
            className="destroy  float-right pr-2 text-red-600 hover:block hidden hover:text-red-800  hover: transition-all duration-300 ease-in-out"
            onClick={() => onDestroy(id)}
          >
            x
          </button>
        </div>
        <input className="edit hidden" type="text" placeholder="수정창 " />
      </li>
    </>
  );
}

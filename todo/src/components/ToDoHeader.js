

export default function ToDoHeader() {
  return (
    <header className="todo-header block shadow-xl">
      <h1 className="todo-todos absolute block -top-[155px] w-full text-7xl  font-thin text-center text-red-200">
        todos
      </h1>
      <input
        className="new-todo w-full relative pl-[60px] py-[16px] border-none bg-black bg-opacity-0 shadow-xl italic text-2xl font-thin text-gray-200"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}

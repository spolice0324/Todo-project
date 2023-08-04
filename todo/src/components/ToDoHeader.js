export default function ToDoHeader() {
  return (
    <header className="todo-header block ">
      <h1 className="todo-todos absolute block -top-[100px] w-full text-7xl font-thin text-center text-red-200">
        todos
      </h1>
      <input
        className="new-todo w-full relative pl-[60px] py-[16px] border-solid shadow-md inset-y-1 bg-opacity-5 italic text-2xl font-thin text-gray-500"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}

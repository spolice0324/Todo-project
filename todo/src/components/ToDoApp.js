function ToDoApp() {
  return (
    <section className="todo-app bg-#fff my-40 mx-130 relative text-base leading-5 text-gray-700 min-w-min max-w-lg mx-auto p-4">
      <header className="todo-header block shadow-xl">
        <h1 className="todo-todos absolute block -top-[155px] w-full text-7xl  font-thin text-center text-red-200">
          todos
        </h1>
        <input
          className="new-todo w-full relative pl-[60px] py-[16px] border-none bg-black bg-opacity-0 shadow-xl italic text-2xl text-thin text-gray-200"
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
    </section>
  );
}

export default ToDoApp;

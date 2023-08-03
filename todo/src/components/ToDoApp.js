function ToDoApp() {
  return (
    <section className="todo-app">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="할 일을 입력해주세요."
          autoFocus
        />
      </header>
    </section>
  );
}

export default ToDoApp;

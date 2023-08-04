import ToDoMain from "./ToDoMain";
import ToDoFooter from "./ToDoFooter";
import ToDoHeader from "./ToDoHeader";

function ToDoApp() {
  return (
    <section className="todo-app bg-#fff my-40 mx-130 relative text-base leading-5 text-gray-700 min-w-min max-w-lg mx-auto p-4">
      <ToDoHeader />
      <ToDoMain />
      <ToDoFooter />
    </section>
  );
}

export default ToDoApp;

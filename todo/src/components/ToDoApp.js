import ToDoMain from "./ToDoMain";
import ToDoFooter from "./ToDoFooter";
import ToDoHeader from "./ToDoHeader";

function ToDoApp() {
  return (
    <section className="todo-app relative my-[130px] mx-[40px] bg-white text-base leading-5 min-w-[230px] max-w-[550px] shadow-md border-solid border  ">
      <ToDoHeader />
      <ToDoMain />
      <ToDoFooter />
    </section>
  );
}

export default ToDoApp;

import "./App.css";

import ToDoApp from "components/ToDoApp";
import ToDoMain from "components/ToDoMain";
import ToDoFooter from "components/ToDoFooter";

function App() {
  return (
    <>
      <ToDoApp>
        <ToDoMain />
        <ToDoFooter />
      </ToDoApp>
    </>
  );
}

export default App;

import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ToDoApp from "components/ToDoApp";

function App() {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/:filter?" Component={ToDoApp} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;

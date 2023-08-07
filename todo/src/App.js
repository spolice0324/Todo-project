import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ToDoApp from "components/ToDoApp";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" Component={ToDoApp} />
          <Route path="/#/active" />
          <Route path="/#/completed" />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

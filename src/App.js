import React from "react";
import "./scss/main.scss";
import LeftPanel from "./components/LeftPanel";
import ToDoPanel from "./components/ToDoPanel";
import PopUp from "./components/PopUp";
import { StoreContext } from "./Store";

function App() {
  const [state, dispatch] = React.useContext(StoreContext);

  return (
    <div className="app">
      <LeftPanel />
      <ToDoPanel />
      <PopUp content={state.currentTodo} />
    </div>
  );
}

export default App;

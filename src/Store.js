import React from "react";
import reducer from "./Reducer";

export const StoreContext = React.createContext({});

const getTodos = () => {
  if (localStorage.getItem("todos") === null) return [];
  return JSON.parse(localStorage.getItem("todos"));
};

let globalState = {
  todos: getTodos(),
  openPopup: false,
  deleteMode: false,
  currentTodo: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, globalState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;

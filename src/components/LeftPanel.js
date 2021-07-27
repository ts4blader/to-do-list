import React from "react";
import { StoreContext } from "../Store";
import { ACTION } from "../Reducer";
const LeftPanel = () => {
  const [state, dispatch] = React.useContext(StoreContext);

  const openPopup = () => {
    dispatch({ type: ACTION.OPEN_POPUP, payload: null });
  };

  const cleanTodo = () => {
    state.todos.forEach((todo) => {
      if (todo.complete === true) {
        dispatch({ type: ACTION.REMOVE_TODO, payload: todo });
      }
    });
  };

  const toggleDeleteModel = () => {
    dispatch({ type: ACTION.TOGGLE_DELETE_MODEL });
  };

  return (
    <div className="left-panel">
      <img
        src={process.env.PUBLIC_URL + "/icons/add.png"}
        onClick={openPopup}
        alt="Add"
        className="left-panel__item"
      />
      <img
        onClick={cleanTodo}
        src="../icons/clean-code.png"
        alt="Clean"
        className="left-panel__item"
      />
      <img
        onClick={toggleDeleteModel}
        src="../icons/trash.png"
        alt="Delete"
        className={
          state.deleteMode ? "left-panel__item active" : "left-panel__item"
        }
      />
    </div>
  );
};

export default LeftPanel;

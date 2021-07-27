import React from "react";
import { StoreContext } from "../Store";
import { ACTION } from "../Reducer";
import edit from "../icons/edit.png";
import close from "../icons/close.png";

export const createTodo = (content, nes = false, imp = false) => {
  return {
    id: Date.now(),
    name: content,
    nescessary: nes,
    important: imp,
    complete: false,
  };
};

export default function ToDoItem({ content }) {
  const [state, dispatch] = React.useContext(StoreContext);

  const openPopup = () => {
    dispatch({ type: ACTION.OPEN_POPUP, payload: content });
  };

  const deleteTodo = () => {
    dispatch({ type: ACTION.REMOVE_TODO, payload: content });
  };

  return (
    <div className="to-do-item play">
      <p
        className="to-do-item__name"
        onClick={() =>
          dispatch({
            type: ACTION.UPDATE_TODO,
            payload: { ...content, complete: !content.complete },
          })
        }
      >
        {content.name}
      </p>
      <div
        className={
          content.complete ? "to-do-item__bar show" : "to-do-item__bar"
        }
      ></div>
      {state.deleteMode ? (
        <img
          src={close}
          alt="Delete"
          className="to-do-item__delete"
          onClick={deleteTodo}
        />
      ) : (
        <img
          onClick={openPopup}
          src={edit}
          alt="edit"
          className="to-do-item__edit"
        />
      )}
    </div>
  );
}

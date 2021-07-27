import React from "react";
import { StoreContext } from "../Store";
import { ACTION } from "../Reducer";
import { createTodo } from "./ToDoItem";

const Checkbox = ({ label, check, setCheck }) => {
  const handleChange = (e) => {
    setCheck((prev) => !prev);
  };
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={label}
        name={label}
        value={label}
        checked={check}
        onChange={handleChange}
      />
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 417.81333 417"
          class="svg"
        >
          <g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"
              fill="#ffffff"
              data-original="#000000"
            />
          </g>
        </svg>
      </span>
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default function PopUp({ content }) {
  const [state, dispatch] = React.useContext(StoreContext);
  const [name, setName] = React.useState("");
  const [important, setImportant] = React.useState(false);
  const [nescessary, setNescessary] = React.useState(false);

  React.useEffect(() => {
    if (content !== null) {
      setName(content.name);
      setNescessary(content.nescessary);
      setImportant(content.important);
    }
  }, [content]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const close = () => {
    dispatch({ type: ACTION.CLOSE_POPUP });
  };

  const handleSubmit = () => {
    if (name !== "") {
      if (content === null) {
        dispatch({
          type: ACTION.ADD_TODO,
          payload: createTodo(name, nescessary, important),
        });
        setName("");
        setNescessary(false);
        setImportant(false);
      } else {
        dispatch({
          type: ACTION.UPDATE_TODO,
          payload: {
            ...content,
            name: name,
            nescessary: nescessary,
            important: important,
          },
        });
        dispatch({ type: ACTION.CLOSE_POPUP });
      }
    } else alert("Plz Name not empty");
  };

  return (
    <div className={state.openPopup ? "popup open" : "popup"}>
      <div className="popup__close" onClick={close}></div>
      <p className="popup__title">
        {content === null ? "Add Todo" : "Edit Todo"}
      </p>
      <form className="popup__form" action="">
        <input
          onChange={handleChange}
          type="text"
          className="popup__form__name"
          name="name"
          placeholder="Input the name"
          value={name}
        />
        <div className="checkboxes-container">
          <Checkbox
            label="important"
            check={important}
            setCheck={setImportant}
          />
          <Checkbox
            label="nescessary"
            check={nescessary}
            setCheck={setNescessary}
          />
        </div>
        <div className="submit-btn" onClick={handleSubmit}>
          Submit
        </div>
      </form>
    </div>
  );
}

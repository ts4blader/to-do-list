import { StoreContext } from "../Store";
import React from "react";
import ToDoItem from "../components/ToDoItem";

const ToDoContainer = ({ imp, nes }) => {
  const [state, dispatch] = React.useContext(StoreContext);
  let data = [];
  state.todos.forEach((todo) => {
    if (todo.important === imp && todo.nescessary === nes) {
      data.push(todo);
    }
  });

  return (
    <div className="to-do-container" important={imp} nescessary={nes}>
      <ul>
        {data.map((todo) => (
          <li className="to-do-container__item">
            <ToDoItem content={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoContainer;

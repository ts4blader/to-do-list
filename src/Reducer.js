export const ACTION = {
  OPEN_POPUP: "OPEN_POPUP",
  CLOSE_POPUP: "CLOSE_POPUP",
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  LOAD_DATA: "LOAD_DATA",
  UPDATE_TODO: "UPDATE_TODO",
  ENTER_DELETE_MODE: "ENTER_DELETE_MODE",
};

export default function reducer(state, action) {
  let newTodos = [];
  switch (action.type) {
    case ACTION.ADD_TODO: //ADD_TODO
      newTodos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };

    case ACTION.REMOVE_TODO: //REMOVE_TODO
      newTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };

    case ACTION.UPDATE_TODO: //UPDATE_TODO
      newTodos = state.todos;
      newTodos.forEach((todo, index) => {
        if (todo.id === action.payload.id) {
          newTodos[index] = action.payload;
        }
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };

    case ACTION.LOAD_DATA: //LOAD_DATA
      return { ...state, todos: action.payload };

    case ACTION.OPEN_POPUP: //OPEN_POPUP
      return { ...state, openPopup: true, currentTodo: action.payload };

    case ACTION.CLOSE_POPUP: //CLOSE_POPUP
      return { ...state, openPopup: false };

    case ACTION.TOGGLE_DELETE_MODE: //TOGGLE_DELETE_MODE
      return { ...state, deleteMode: !state.deleteMode };
    default:
      throw new Error("Action must be defined");
  }
}

import React from "react";

const TodoContext = React.createContext({
  todoToEdit: {},
  addNewTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  editToggle: (todo) => {},
  cancelToggle: () => {},
});

export default TodoContext;

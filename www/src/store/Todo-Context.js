import React from "react";

const TodoContext = React.createContext({
  getAllTodos: [],
  totalTodos: 0,
  completedTodos: 0,
  todoToEdit: {},
  addNewTodo: (text, completed) => {},
  deleteTodo: (id) => {},
  markTodo: (id) => {},
  editTodo: (id, text) => {},
  editToggle: (id) => {},
  cancelToggle: () => {}
});

export default TodoContext;

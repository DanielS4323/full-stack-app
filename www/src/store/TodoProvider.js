import React, { useEffect, useState } from "react";
import {
  addNewTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  markTodo,
} from "../service";
import TodoContext from "./Todo-Context";

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateUI, setUpdateUI] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  useEffect(() => {
    getAllTodos().then((res) => {
      setTodos(res);
    });
  }, [setTodos, updateUI]);

  const completedTodosHandler = todos?.filter(
    (todo) => todo.completed === "true"
  );

  const addNewTodoHandler = (text, completed) => {
    const newTodo = {
      text: text,
      completed: completed,
    };

    addNewTodo(newTodo);
    setUpdateUI((prev) => !prev);
  };

  const deleteTodoHandler = (id) => {
    deleteTodo(id);
    setTodoToEdit(false);
    setUpdateUI((prev) => !prev);
  };

  const markTodoHandler = (id, completed) => {
    const markedCheck = completed === "true" ? "false" : "true";
    let markedTodo = {
      completed: markedCheck,
    };
    markTodo(id, markedTodo);
    setUpdateUI((prev) => !prev);
  };

  const editToggleHandler = (todo) => {
    setTodoToEdit(todo);
  };

  const cancelToggleHandler = () => {
    setTodoToEdit(null);
  };

  const editTodoHandler = (id, text) => {
    editTodo(id, text);
    setUpdateUI((prev) => !prev);
    setTodoToEdit(null);
  };

  const todoContext = {
    todos: todos,
    totalTodos: todos.length,
    completedTodos: completedTodosHandler.length,
    isLoading: isLoading,
    todoToEdit: todoToEdit,
    addNewTodo: addNewTodoHandler,
    deleteTodo: deleteTodoHandler,
    markTodo: markTodoHandler,
    editTodo: editTodoHandler,
    editToggle: editToggleHandler,
    cancelToggle: cancelToggleHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;

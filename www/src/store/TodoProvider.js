import React, { useState, useEffect } from "react";
import { addNewTodo, deleteTodo, editTodo, markTodo } from "../service";
import TodoContext from "./Todo-Context";
import { getAllTodos } from "../service";

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    getAllTodos().then((res) => {
      setTodos(res);
    });
  }, [updateUI]);

  const completedTodosHandler = todos?.filter(
    (todo) => todo.completed === "true"
  );

  const addNewTodoHandler = (text, completed) => {
    const newTodo = {
      text: text,
      completed: completed,
    };
    addNewTodo(newTodo);
    setUpdateUI(!updateUI);
  };

  const deleteTodoHandler = (id) => {
    deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    setTodoToEdit(false);
  };

  const markTodoHandler = (id, completed) => {
    const markedCheck = completed === "true" ? "false" : "true";

    const todoToMark = todos.find((todo) => todo.id === id);
    let markedTodo = {
      completed: markedCheck,
    };

    markTodo(id, markedTodo);

    let updateMarkedTodo = {
      text: todoToMark.text,
      id: id,
      completed: markedCheck,
    };
    setTodos(todos.map((todo) => (todo.id === id ? updateMarkedTodo : todo)));
  };

  const editToggleHandler = (todo) => {
    setTodoToEdit(todo);
  };

  const cancelToggleHandler = () => {
    setTodoToEdit(null);
  };

  const editTodoHandler = (id, text) => {
    editTodo(id, text);

    let updatedTodo = {
      text: text.text,
      id: todoToEdit.id,
      completed: todoToEdit.completed,
    };

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    setTodoToEdit(null);
  };

  const todoContext = {
    todos: todos,
    totalTodos: todos?.length,
    completedTodos: completedTodosHandler?.length,
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

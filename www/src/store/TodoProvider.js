import React, { useEffect, useState } from "react";
import { deleteTodo, getAllTodos } from "../service";
import TodoContext from "./Todo-Context";

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([
    { text: "Kupi mleko", id: "j31j2", completed: false },
    { text: "Kupi picu", id: "dsd3", completed: true },
    { text: "Odradi domaci", id: "23s", completed: false },
    { text: "Odradi adasda", id: "21233s", completed: true },
  ]);

  // useEffect(() => {
  //   getAllTodos().then((res) => {
  //     setTodos(res);
  //   });
  // });

  const [todoToEdit, setTodoToEdit] = useState(null);

  // const completedTodosHandler = todos.filter((todo) => todo.completed === true);

  const addNewTodoHandler = (text, completed) => {
    const newTodo = {
      text: text,
      completed: completed,
      id: Math.random(),
    };

    setTodos((prev) => [newTodo].concat(prev));
  };

  const deleteTodoHandler = (id) => {
    deleteTodo(id);
    setTodoToEdit(false);
  };

  const markTodoHandler = (id) => {
    const todoToMark = todos.find((todo) => todo.id === id);
    let markedTodo = {
      text: todoToMark.text,
      id: todoToMark.id,
      completed: !todoToMark.completed,
    };
    setTodos(todos.map((todo) => (todo.id === id ? markedTodo : todo)));
    setTodoToEdit(false);
  };

  const editToggleHandler = (id) => {
    setTodoToEdit(false);
    const toEditTodo = todos.find((todo) => todo.id === id);
    setTodoToEdit(toEditTodo);
  };

  const cancelToggleHandler = () => {
    setTodoToEdit(false);
  };

  const editTodoHandler = (id, text) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    let updatedTodo = {
      text: text,
      id: todoToEdit.id,
      completed: todoToEdit.completed,
    };
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    setTodoToEdit(false);
  };

  const todoContext = {
    todos: todos,
    totalTodos: todos.length,
    // completedTodos: completedTodosHandler.length,
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

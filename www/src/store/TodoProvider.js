import React, { useState } from "react";
import { addNewTodo, deleteTodo, editTodo, markTodo } from "../service";
import TodoContext from "./Todo-Context";

const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  // useEffect(() => {
  //   getAllTodos().then((res) => {
  //     setTodos(res);
  //   });
  // }, [setTodos, updateUI]);

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
    setTodoToEdit(false);
    setUpdateUI(!updateUI);
  };

  const markTodoHandler = (id, completed) => {
    const markedCheck = completed === "true" ? "false" : "true";
    let markedTodo = {
      completed: markedCheck,
    };
    markTodo(id, markedTodo);
    setUpdateUI(!updateUI);
  };

  const editToggleHandler = (todo) => {
    setTodoToEdit(todo);
  };

  const cancelToggleHandler = () => {
    setTodoToEdit(null);
  };

  const editTodoHandler = (id, text) => {
    editTodo(id, text);
    setTodoToEdit(null);
    setUpdateUI(!updateUI);
  };

  const todoContext = {
    todos: todos,
    setTodos: setTodos,
    updateUI: updateUI,
    totalTodos: todos.length,
    completedTodos: completedTodosHandler.length,
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

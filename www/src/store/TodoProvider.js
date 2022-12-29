import React, { useState } from "react";
import { addNewTodo, deleteTodo, editTodo } from "../service";
import TodoContext from "./Todo-Context";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoProvider = (props) => {
  const queryClient = useQueryClient();
  const [todoToEdit, setTodoToEdit] = useState(null);

  const addNewTodoMutation = useMutation(addNewTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });


  const editToggleHandler = (todo) => {
    setTodoToEdit(todo);
  };

  const cancelToggleHandler = () => {
    setTodoToEdit(null);
  };

  const editTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  }); 

  const todoContext = {
    todoToEdit: todoToEdit,
    addNewTodo: addNewTodoMutation,
    deleteTodo: deleteTodoMutation,
    updateTodo: editTodoMutation,
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

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { deleteTodo, editTodo, markTodo } from "../../service";
import TodoContext from "../../store/Todo-Context";
import Button from "../UI/Button";

const Todo = ({ todo }) => {
  const { editToggle } = useContext(TodoContext);
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onClickHandleMark = () => {
    const markedCheck = todo.completed === "true" ? "false" : "true";
    updateTodoMutation.mutate({ ...todo, completed: markedCheck });
  };

  const onClickHandleEditToggle = () => {
    editToggle(todo);
  };

  const onClickHandleDelete = () => {
    deleteTodoMutation.mutate(todo.id);
  };

  const checkForMark = todo.completed === "true" ? true : false;

  return (
    <React.Fragment>
      <div className="row margin all-20">
        <div className="col s1">
          <label className="padding all-20">
            <input
              onChange={onClickHandleMark}
              type="checkbox"
              className="filled-in"
              checked={checkForMark}
            />
            <span className="margin rl-10"></span>
          </label>
        </div>
        <div className="col s5">
          <h5 className="title white-text">{todo.text}</h5>
        </div>
        <div className="col s2 push-s2">
          <Button
            title="Edit"
            onClick={onClickHandleEditToggle}
            className="purple darken-4 white-text btn-small waves-effect waves-light margin top-10 brown-text hoverable"
          />
        </div>
        <div className="col s2 push-s2">
          <Button
            title="delete"
            onClick={onClickHandleDelete}
            className="purple lighten-1 white-text btn-small waves-effect waves-light margin top-10 brown-text hoverable"
          />
        </div>
      </div>
      <div className="divider"></div>
    </React.Fragment>
  );
};

export default Todo;

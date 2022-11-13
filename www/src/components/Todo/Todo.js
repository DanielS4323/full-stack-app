import React, { useContext } from "react";
import TodoContext from "../../store/Todo-Context";

const Todo = (props) => {
  const { markTodo, editToggle, deleteTodo } = useContext(TodoContext);

  const onClickHandleMark = () => {
    markTodo(props.todo.id);
  };

  const onClickHandleEditToggle = () => {
    editToggle(props.todo.id);
  };

  const onClickHandleDelete = () => {
    deleteTodo(props.todo.id);
  };

  return (
    <React.Fragment>
      <div className="row margin all-20">
        <div className="col s1">
          <label className="padding all-20">
            <input
              onChange={onClickHandleMark}
              type="checkbox"
              className="filled-in"
              checked={props.todo.completed}
            />
            <span></span>
          </label>
        </div>
        <div className="col s5">
          <h6 className="title white-text">{props.todo.text}</h6>
        </div>
        <div className="col s2 push-s2">
          <button
            onClick={onClickHandleEditToggle}
            className="purple darken-4 white-text btn-small waves-effect waves-light margin top-10 brown-text hoverable"
          >
            Edit
          </button>
        </div>
        <div className="col s2 push-s2">
          <button
            onClick={onClickHandleDelete}
            className="purple lighten-1 white-text btn-small waves-effect waves-light margin top-10 brown-text hoverable"
          >
            delete
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </React.Fragment>
  );
};

export default Todo;

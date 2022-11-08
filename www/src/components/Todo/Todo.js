import React from "react";

const Todo = (props) => {
  let doneTodo = props.todo.completed ? (
    <i className="material-icons">done</i>
  ) : (
    <i className="material-icons">do_not_disturb</i>
  );

  return (
    <li className="collection-item avatar">
      <img src="images/yuna.jpg" alt="" className="circle" />
      <i className="material-icons circle">note</i>
      <span className="title">{props.todo.text}</span>
      <div className="secondary-content">{doneTodo}</div>
    </li>
  );
};

export default Todo;

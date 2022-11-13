import React from "react";

const Todo = (props) => {
  const handleCompleted = () => {
    let updateTodo = props.todo
    let findIndex = 12
  };

  return (
    <React.Fragment>
      <div className="row margin all-20">
        <div className="col s1">
          <label className="padding all-20">
            <input
              onChange={handleCompleted}
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
          <button className="purple darken-4 white-text btn-small waves-effect waves-light margin top-10 brown-text hoverable">
            Edit
          </button>
        </div>
        <div className="col s2 push-s2">
          <button className="purple lighten-1 white-text btn-small waves-effect waves-light margin top-10 brown-text hoverable">
            delete
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </React.Fragment>
  );
};

export default Todo;

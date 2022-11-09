import React from "react";

const Todo = (props) => {
  const completedTodo = props.todo.completed ? (
    <i className="medium material-icons teal-text hoverable">done</i>
  ) : (
    <i className="medium material-icons red-text hoverable">do_not_disturb</i>
  );

  return (
    <div class="col m12 primary-bg">
      <div className="card valign">
        <li className="collection-item avatar center">
          <h5>
            {props.todo.text} {completedTodo}
          </h5>
          <span className="secondary-content"></span>
          <div class="card-action center">
            <a class="waves-effect waves-light btn-small margin rl-10 teal lighten-2 hoverable">
              <i class="material-icons left">edit</i>Edit
            </a>

            <a class="waves-effect waves-light btn-small margin rl-10 red hoverable">
              <i class="material-icons left">delete_forever</i>Delete
            </a>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Todo;

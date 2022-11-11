import React from "react";

const Todo = (props) => {
  const completedTodo = props.todo.completed ? (
    <i className="small material-icons teal-text hoverable">done</i>
  ) : (
    <i className="small material-icons red-text hoverable">do_not_disturb</i>
  );

  return (
    // <div class="col m12 primary-bg">
    //   <div className="card valign">
    //     <li className="collection-item avatar center">
    //       <h6>
    //         {props.todo.text} {completedTodo}
    //       </h6>
    //       <span className="secondary-content"></span>
    //       <div class="card-action center">
    //         <a class="waves-effect waves-light btn-small margin rl-10 teal lighten-2 hoverable">
    //           <i class="material-icons left">edit</i>Edit
    //         </a>

    //         <a class="waves-effect waves-light btn-small margin rl-10 red hoverable">
    //           <i class="material-icons left">delete_forever</i>Delete
    //         </a>
    //       </div>
    //     </li>
    //   </div>
    // </div>

    <React.Fragment>
      <div class="row margin all-20 padding-1">
        <div className="col s1">{completedTodo}</div>
        <div className="col s5">
          <h6 className="title white-text">{props.todo.text}</h6>
        </div>
        <div className="col s2">
          <button className="brown darken-3 btn-small waves-effect waves-light margin top-10 brown-text hoverable">
            Edit
          </button>
        </div>
        <div className="col s2 push-s1">
          <button className="teal lighten-3 btn-small waves-effect waves-light margin top-10 brown-text hoverable">
            delete
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </React.Fragment>
  );
};

export default Todo;

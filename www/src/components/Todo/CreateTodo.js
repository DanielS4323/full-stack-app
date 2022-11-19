import React, { useContext, useRef } from "react";
import TodoContext from "../../store/Todo-Context";
import Button from "../UI/Button";

const CreateTodo = () => {
  const { addNewTodo } = useContext(TodoContext);
  const textInputRef = useRef("");

  const addNewTodoHandler = () => {
    let todoText = textInputRef.current.value.trim();
    let completed = "";

    if (todoText.length > 1) {
      addNewTodo(todoText, completed);
      textInputRef.current.value = "";
    }
    return;
  };

  return (
    <div className="row">
      <div className="col s8 l6 offset-l3 grey darken-4  z-depth-">
        <div className="input-field">
          <i className="material-icons prefix white-text">mode_edit</i>
          <input
            id="icon_prefix"
            type="text"
            className="white-text active"
            ref={textInputRef}
            autoFocus
          />
          <label htmlFor="icon_prefix" className="white-text">
            Enter To do
          </label>
          <div className="row">
            <div className="col-12 center">
              <Button
                title="add todo"
                className="deep-purple lighten-1 white-text btn waves-effect waves-light margin top-10 brown-text hoverable"
                onClick={addNewTodoHandler}
                iconClassName="material-icons right"
                icon="note_add"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;

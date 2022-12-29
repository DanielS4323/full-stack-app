import React, { useContext } from "react";
import Button from "../UI/Button";
import TodoContext from "../../store/Todo-Context";
import useInput from "../hooks/use-input";

const CreateTodo = () => {
  const { addNewTodo } = useContext(TodoContext);

  const {
    value: todoText,
    isValid: isValidText,
    hasError,
    valueChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetTextInput,
  } = useInput((value) => value.trim().length > 2);

  const addNewTodoHandler = () => {
    if (isValidText) {
      const newTodo = {
        text: todoText,
        completed: "false",
      };
      addNewTodo.mutate(newTodo);
      resetTextInput();
    }
    return;
  };

  // console.log(sranje);

  return (
    <div className="row">
      <div className="col s8 l6 offset-l3 grey darken-4  z-depth-">
        <div className="input-field">
          <i className="material-icons prefix white-text">mode_edit</i>
          <input
            id="icon_prefix"
            type="text"
            className="white-text active"
            value={todoText}
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
          />
          {hasError && (
            <p className="white-text center">
              Text must be at least 2 characters long!
            </p>
          )}
          <label htmlFor="icon_prefix" className="white-text">
            Enter To do
          </label>

          <div className="row">
            <div className="col-12 center">
             {!hasError && <Button
                title="add todo"
                className="deep-purple lighten-1 white-text btn waves-effect waves-light margin top-10 brown-text hoverable"
                onClick={addNewTodoHandler}
                iconClassName="material-icons right"
                icon="note_add"
              />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;

import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../store/Todo-Context";
import Button from "../UI/Button";

const EditTodo = () => {
  const { todoToEdit, editTodo, cancelToggle } = useContext(TodoContext);
  const [editTodoText, setEditTodoText] = useState("");

  const onChangeHandle = (event) => {
    setEditTodoText(event.target.value);
  };

  const onClickHandle = () => {
    let text = editTodoText.trim();
    if (text.length > 1) {
      editTodo(todoToEdit.id, text);
    }
    return;
  };

  const onClickCancelEdit = () => {
    cancelToggle();
  };

  useEffect(() => {
    setEditTodoText(todoToEdit.text);
  }, [todoToEdit]);

  return (
    <div className="row">
      <div className="col s8 l6 offset-l3 grey darken-4">
        <div className="input-field">
          <i className="material-icons prefix white-text">mode_edit</i>
          <input
            id="icon_prefix"
            type="text"
            className="white-text active"
            onChange={onChangeHandle}
            value={editTodoText}
            autoFocus
          ></input>
          <label htmlFor="icon_prefix" className="white-text"></label>
          <div className="row">
            <div className="col-12 center">
              <Button
                title="Edit Todo"
                className="purple darken-4 white-text btn waves-effect waves-light margin all-10  brown-text hoverable"
                iconClassName="material-icons right"
                icon="note_add"
                onClick={onClickHandle}
              />
              <Button
                title="Cancel"
                className="purple lighten-1 white-text btn waves-effect waves-light margin all-10  brown-text hoverable"
                iconClassName="material-icons right"
                icon="cancel"
                onClick={onClickCancelEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;

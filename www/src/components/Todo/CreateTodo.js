import React from "react";

const CreateTodo = () => {
  return (
    <div className="row">
      <div className="col s8 l6 offset-l3 grey darken-4">
        <div className="input-field">
          <i className="material-icons prefix white-text">mode_edit</i>
          <input
            id="icon_prefix"
            type="text"
            className="white-text active"
          ></input>
          <label htmlFor="icon_prefix" className="white-text">
            Enter To do
          </label>
          <div className="row">
            <div className="col-12 center">
              <button
                className="deep-purple lighten-1 white-text btn waves-effect waves-light margin top-10 brown-text hoverable"
                type="submit"
                name="action"
              >
                Add Todo
                <i className="material-icons right">note_add</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;

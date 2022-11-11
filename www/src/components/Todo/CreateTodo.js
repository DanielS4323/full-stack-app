import React from "react";

const CreateTodo = () => {
  return (
    <div className="row">
      <div class="col s8 l6 offset-l3 grey darken-4">
        <div className="input-field">
          <i className="material-icons prefix white-text">mode_edit</i>
          <textarea
            id="icon_prefix2"
            className="materialize-textarea"
          ></textarea>
          <label htmlFor="icon_prefix2" className="white-text">
            Enter To do
          </label>
          <div class="row">
            <div class="col-12 center">
              <button
                className="deep-purple lighten-1 white-text btn waves-effect waves-light margin top-10 brown-text hoverable"
                type="submit"
                name="action"
              >
                Add Todo
                <i class="material-icons right">note_add</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;

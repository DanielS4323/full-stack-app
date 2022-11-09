import React from "react";

const CreateTodo = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s5">
            <i className="material-icons prefix teal-text">mode_edit</i>
            <textarea
              id="icon_prefix2"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="icon_prefix2" className="teal-text">Enter To do</label>
          </div>
          <button
            className="teal lighten-3 btn waves-effect waves-light margin top-10 brown-text hoverable"
            type="submit"
            name="action"
          >
            Add Todo
            <i class="tertiary-c material-icons right">note_add</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;

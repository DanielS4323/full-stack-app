import React from "react";

const CreateTodo = () => {
  return (
    <div className="row margin.top-20">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
          <label htmlFor="icon_prefix2">Enter To do</label>
        </div>
      </div>
    </form>
  </div>
  );
};

export default CreateTodo;

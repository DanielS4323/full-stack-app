import React from "react";
import CreateTodo from "./components/Todo/CreateTodo";
import TodoList from "./components/Todo/TodoList";
import "./index.css";
import { useContext } from "react";
import TodoContext from "./store/Todo-Context";
import EditTodo from "./components/Todo/EditTodo";
import Layout from "./components/layout/Layout";

function App() {
  const { todoToEdit } = useContext(TodoContext);

  return (
    <Layout>
      <div className="row margin top-100">
        <div className="container">
          {!todoToEdit && <CreateTodo />}
          {todoToEdit && <EditTodo />}
        </div>
        <div className="col s8 l6 offset-l3">
          <TodoList />
        </div>
      </div>
    </Layout>
  );
}

export default App;

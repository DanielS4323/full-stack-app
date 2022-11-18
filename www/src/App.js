import React from "react";
import Header from "./components/UI/Header";
import CreateTodo from "./components/Todo/CreateTodo";
import TodoList from "./components/Todo/TodoList";
import "./index.css";
import { useContext } from "react";
import TodoContext from "./store/Todo-Context";
import EditTodo from "./components/Todo/EditTodo";
import LoadingSpinner from "./components/UI/LoadingSpinner";


function App() {
  const { todoToEdit, isLoading } = useContext(TodoContext);


  return (
    <div className="App">
      <Header />
      <div className="row margin top-100">
        <div className="container">
          {!todoToEdit && <CreateTodo />}
          {todoToEdit && <EditTodo />}
        </div>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="col s8 l6 offset-l3">
            <TodoList />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

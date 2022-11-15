import Header from "./components/UI/Header";
import CreateTodo from "./components/Todo/CreateTodo";
import TodoList from "./components/Todo/TodoList";
import "./index.css";
import { useContext, useEffect, useState } from "react";
import TodoContext from "./store/Todo-Context";
import EditTodo from "./components/Todo/EditTodo";

function App() {
  const { todoToEdit } = useContext(TodoContext);
  const [todos, setTodos] = useState()

  async function getAllTodos() {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json();
    return data
    
}

  useEffect(() => {
    getAllTodos().then((res) => {
      console.log(res)
    })
  })

  return (
    <div className="App">
      <Header />
      <div className="row margin top-100">
        <div className="container">
          {!todoToEdit && <CreateTodo />}
          {todoToEdit && <EditTodo />}
        </div>
        <div className="col s8 l6 offset-l3">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

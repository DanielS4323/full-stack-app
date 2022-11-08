import Layout from "./components/layout/Layout";
import Header from "./components/UI/Header";
import CreateTodo from "./components/Todo/CreateTodo";
import TodoList from "./components/Todo/TodoList";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row margin top-100">
        <div className="col s8 offset-m8 l8 offset-l4">
          <CreateTodo />
        </div>
        <div className="col s8 l6 offset-l3">
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;

import Header from "./components/UI/Header";
import CreateTodo from "./components/Todo/CreateTodo";
import TodoList from "./components/Todo/TodoList";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row margin top-100">
        <div className="container">
          <CreateTodo />
        </div>
        <div className="col s8 l6 offset-l3">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

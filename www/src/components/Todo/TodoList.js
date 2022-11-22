import React, { useContext, useEffect } from "react";
import TodoContext from "../../store/Todo-Context";
import Todo from "./Todo";
import { getAllTodos } from "../../service";

const TodoList = () => {
  const { totalTodos, todos, completedTodos, setTodos, updateUI } =
    useContext(TodoContext);

  useEffect(() => {
    getAllTodos().then((res) => {
      setTodos(res);
    });
  }, [setTodos, updateUI]);

  const noTodos = <p>No todos...</p>;

  const displayTodos = todos?.map((todo) => <Todo key={todo.id} todo={todo} />);

  const totalTodosCount = `${totalTodos} Total, ${completedTodos} Completed`;
  return (
    <div className="grey darken-4 margin bottom-100">
      <h5 className="padding all-10 white-text center">
        {totalTodos > 0 && totalTodosCount}
        {totalTodos === 0 && noTodos}
      </h5>
      <div className="divider margin bottom-20"></div>
      {totalTodos > 0 && displayTodos}
    </div>
  );
};

export default TodoList;

import React, { useContext } from "react";
import TodoContext from "../../store/Todo-Context";
import Todo from "./Todo";

const TodoList = () => {
  const { totalTodos, todos, completedTodos } = useContext(TodoContext);

  const totalTodosCount = `${totalTodos} Total, ${completedTodos} Completed`;
  const noTodos = "No todos...";

  const displayTodos = todos?.map((todo) => (
    <Todo key={todo.id} todo={todo} />
  ));

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

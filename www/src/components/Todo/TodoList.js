import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../../service";
// import TodoContext from "../../store/Todo-Context";
import Todo from "./Todo";
import LoadingSpinner from "../UI/LoadingSpinner";

const TodoList = () => {
  // const { totalTodos, todos, completedTodos } = useContext(TodoContext);

  const { isLoading, isError, data: todos } = useQuery(["todos"], getAllTodos);

  const totalTodos = todos?.length;
  const completedTodos = todos?.filter(
    (todo) => todo.completed === "true"
  ).length;

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <p>Error Occured</p>;

  const displayTodos = todos?.map((todo) => <Todo key={todo.id} todo={todo} />);

  const totalTodosCount = `${totalTodos} Total, ${completedTodos} Completed`;
  return (
    <div className="grey darken-4 margin bottom-100">
      <h5 className="padding all-10 white-text center">
        {totalTodos > 0 && totalTodosCount}
        {totalTodos === 0 && <p>No todos...</p>}
      </h5>
      <div className="divider margin bottom-20"></div>
      {totalTodos > 0 && displayTodos}
    </div>
  );
};

export default TodoList;

import React from "react";
import Todo from "./Todo";

const DUMMY = [
  { text: "Kupi mleko", id: "j31j2", completed: false },
  { text: "Kupi picu", id: "dsd3", completed: true },
  { text: "Odradi domaci", id: "23s", completed: false },
  { text: "Kupi mleko", id: "j31j2", completed: false },
  { text: "Kupi picu", id: "dsd3", completed: true },
  { text: "Odradi domaci", id: "23s", completed: true },
];

const content = DUMMY.map((todo) => <Todo key={todo.id} todo={todo} />);

const TodoList = () => {
  return <ul className="collection margin top-20">{content}</ul>;
};

export default TodoList;

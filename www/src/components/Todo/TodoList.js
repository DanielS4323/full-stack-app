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
  return (
    <div className="grey darken-4">
      <h5 className="padding all-10 white-text">3 Total, 2 Completed</h5>
      <div className="divider margin bottom-20"></div>
      {content}
    </div>
  );
};

export default TodoList;

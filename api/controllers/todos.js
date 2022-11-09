import { v4 as uuidv4 } from "uuid";

let todos = [
  {
    text: "Buy Milk",
    completed: false,
    id: "1",
  },
  {
    text: "Buy bread",
    completed: true,
    id: "2",
  },
  {
    text: "Study math",
    completed: false,
    id: "d211",
  },
];

export const getTodos = (req, res) => {
  res.send(todos);
};

export const createTodo = (req, res) => {
  const todo = req.body;

  todos.push({ ...todo, id: uuidv4() });

  res.send(`Todo ${todo.text} added to DB.`);
};

export const getOneTodo = (req, res) => {
  const { id } = req.params;
  const foundTodo = todos.find((todo) => todo.id === id);
  res.send(foundTodo);
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;

  todos = todos.filter((todo) => todo.id !== id);

  res.send(`Todo with id ${id} is deleted from DB`);
};
export const patchTodo = (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  const todoToPatch = todos.find((todo) => todo.id === id);

  if (text) todoToPatch.text = text;
  if (completed) todoToPatch.completed = completed;

  res.send(`Todo with id: ${id} has been patched!`);
};

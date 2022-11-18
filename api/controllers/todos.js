import {
  createTodoHandler,
  deleteTodoHandler,
  getOneTodoHandler,
  getTodosHandler,
  patchTodoHandler,
} from "../services/todo.js";

export const getTodos = async (req, res) => {
  return await getTodosHandler(req, res);
};

export const createTodo = async (req, res) => {
  return await createTodoHandler(req, res);
};

export const getOneTodo = async (req, res) => {
  return await getOneTodoHandler(res, req);
};

export const deleteTodo = async (req, res) => {
  return await deleteTodoHandler(req, res);
};
export const patchTodo = async (req, res) => {
  return await patchTodoHandler(req, res);
};

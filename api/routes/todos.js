import express from "express";

import {
  createTodo,
  deleteTodo,
  getTodos,
  getOneTodo,
  patchTodo,
} from "../controllers/todos.js";

const router = express.Router();



router.get("/", getTodos);

router.post("/", createTodo);

router.get("/:id", getOneTodo);

router.delete("/:id", deleteTodo);

router.patch("/:id", patchTodo);

export default router;

import { v4 as uuidv4 } from "uuid";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, cert } from "firebase-admin/app";
import { readFile } from "fs/promises";
import cors from "cors";
import express from "express";

const serviceKey = JSON.parse(
  await readFile(new URL("../config/key.json", import.meta.url))
);

const app = express();
app.use(cors());

initializeApp({
  credential: cert(serviceKey),
});

const db = getFirestore();

export const getTodos = async (req, res) => {
  try {
    const todosRef = db.collection("todos");
    const response = await todosRef.get();
    let responseArr = [];
    response.forEach((doc) => {
      responseArr.push({
        ...doc.data(),
        id: doc._ref._path.segments[1],
      });
    });
    res.status(200).send(responseArr);
  } catch (error) {
    res.send(error);
  }
};

export const createTodo = async (req, res) => {
  try {
    const todo = {
      text: req.body.text,
      completed: req.body.completed,
    };
    await db.collection("todos").add(todo);
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({
      error: error.message
    })
  }
};

export const getOneTodo = async (req, res) => {
  try {
    const todosRef = db.collection("todos").doc(req.params.id);
    const response = await todosRef.get();
    res.status(201).send(response.data());
  } catch (error) {
    res.send(error);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const response = db.collection("todos").doc(id).delete();
  } catch (error) {
    res.send(error);
  }

  res.json({message: `Todo with id ${id} is deleted from DB`});
};
export const patchTodo = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  const todosRef = db.collection("todos");
  if (text) {
    try {
     await todosRef.doc(id).update({
        text: text,
      });
      res.send("text updated");
    } catch (error) {
      res.send(error);
    }
  }
  if (completed) {
    try {
     await todosRef.doc(id).update({
        completed: completed,
      });
      res.send("mark updated");
    } catch (error) {
      res.send(error);
    }
  }
};

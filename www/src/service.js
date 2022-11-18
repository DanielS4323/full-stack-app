const URL = "http://localhost:5000";
const TODOS = "todos";

export const getAllTodos = async () => {
  const response = await fetch(`${URL}/${TODOS}`);

  if (!response.ok) {
    throw new Error("Could not fetch todos.");
  }

  const data = await response.json();

  return data;
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${URL}/${TODOS}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Could not delete todo.");
  }

  return null;
};

export const addNewTodo = async (newTodo) => {
  const response = await fetch(`${URL}/${TODOS}`, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Could not add new todo.");
  }
  return data;
};

export const markTodo = async (id, completed) => {
  const response = await fetch(`${URL}/${TODOS}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(completed),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Could not mark todo.");
  }
  return data;
};

export const editTodo = async (id, text) => {
  const response = await fetch(`${URL}/${TODOS}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(text),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Could not mark todo.");
  }
  return data;
};

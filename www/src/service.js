const URL = "http://127.0.0.1:8081";
const TODOS = "todos";

export const getAllTodos = async () => {
  const response = await fetch(`${URL}/${TODOS}`);

  // if (!response.ok) {
  //   throw new Error("Could not fetch todos.");
  // }
  // const data = await response.json();
  // return data;

  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${URL}/${TODOS}/${id}`, {
    method: "DELETE",
  });

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
  return response.json();
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

  return data;
};

export const editTodo = async (todo) => {
  const response = await fetch(`${URL}/${TODOS}/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
};

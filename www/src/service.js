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
    throw new Error(data.message || "Could not delete article");
  }
  
  return null
};

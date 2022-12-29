import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import TodoProvider from "./store/TodoProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <App />
      </TodoProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

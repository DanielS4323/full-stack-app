import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import reportWebVitals from "./reportWebVitals";
import TodoProvider from "./store/TodoProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </TodoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

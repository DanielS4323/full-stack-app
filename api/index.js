import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todoRoutes from './routes/todos.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/todos', todoRoutes)

app.get("/", (req, res) => {
  res.send("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

app.use(cors());

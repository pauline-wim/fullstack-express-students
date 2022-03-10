const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(express.json());
app.use(cors());

const students = [
  {
    id: 1,
    name: "Paul",
  },
  {
    id: 2,
    name: "Bob",
  },
  {
    id: 3,
    name: "Michael",
  },
];

// ROUTES

app.get("/", (_req, res) => {
  res.send("Students");
});

app.get("/students", (_req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  console.log(req.body);
  students.push({
    id: students.length + 1,
    name: req.body.name,
  });
  res.send(students);
});

// ERROR
app.get("*", (req, res) => {
  res.status(404).send("Page not found - 404");
});

app.listen(PORT, () => console.log("Listening on PORT", PORT));

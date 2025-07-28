const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found");

  res.send(course);

  // res.send(req.params.id);
});

// Route and Query Parameters
// app.get("/api/courses/:year/:month", (req, res) => {
//   res.send(req.params);
//   res.send(req.query);
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Hello Chief, the server is running on port ${PORT}`),
);
